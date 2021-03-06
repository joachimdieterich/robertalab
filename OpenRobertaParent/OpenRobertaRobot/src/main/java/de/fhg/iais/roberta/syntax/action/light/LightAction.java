package de.fhg.iais.roberta.syntax.action.light;

import java.util.List;

import de.fhg.iais.roberta.blockly.generated.Block;
import de.fhg.iais.roberta.blockly.generated.Field;
import de.fhg.iais.roberta.blockly.generated.Value;
import de.fhg.iais.roberta.factory.IRobotFactory;
import de.fhg.iais.roberta.inter.mode.action.IActorPort;
import de.fhg.iais.roberta.inter.mode.action.IBrickLedColor;
import de.fhg.iais.roberta.inter.mode.action.ILightMode;
import de.fhg.iais.roberta.mode.action.BrickLedColor;
import de.fhg.iais.roberta.syntax.BlockTypeContainer;
import de.fhg.iais.roberta.syntax.BlocklyBlockProperties;
import de.fhg.iais.roberta.syntax.BlocklyComment;
import de.fhg.iais.roberta.syntax.BlocklyConstants;
import de.fhg.iais.roberta.syntax.Phrase;
import de.fhg.iais.roberta.syntax.action.Action;
import de.fhg.iais.roberta.syntax.lang.expr.Expr;
import de.fhg.iais.roberta.transformer.ExprParam;
import de.fhg.iais.roberta.transformer.Jaxb2AstTransformer;
import de.fhg.iais.roberta.transformer.JaxbTransformerHelper;
import de.fhg.iais.roberta.typecheck.BlocklyType;
import de.fhg.iais.roberta.util.dbc.Assert;
import de.fhg.iais.roberta.visitor.AstVisitor;
import de.fhg.iais.roberta.visitor.actor.AstActorLightVisitor;

public class LightAction<V> extends Action<V> {
    private final Expr<V> rgbLedColor;
    private final IBrickLedColor color;
    private final ILightMode mode;
    private static List<Field> fields;
    private final IActorPort port;
    private static boolean isActor;
    private static boolean isBlink;

    private LightAction(
        IActorPort port,
        IBrickLedColor color,
        ILightMode mode,
        Expr<V> rgbLedColor,
        BlocklyBlockProperties properties,
        BlocklyComment comment) {
        super(BlockTypeContainer.getByName("LIGHT_ACTION"), properties, comment);
        Assert.isTrue(mode != null);
        this.rgbLedColor = rgbLedColor;
        this.color = color;
        this.port = port;
        this.mode = mode;
        setReadOnly();
    }

    /**
     * Creates instance of {@link LightAction}. This instance is read only and can not be modified.
     *
     * @param color of the lights on the brick. All possible colors are defined in {@link BrickLedColor}; must be <b>not</b> null,
     * @param blinkMode type of the blinking; must be <b>not</b> null,
     * @param properties of the block (see {@link BlocklyBlockProperties}),
     * @param comment added from the user,
     * @return read only object of class {@link LightAction}
     */
    private static <V> LightAction<V> make(
        IActorPort port,
        IBrickLedColor color,
        ILightMode mode,
        Expr<V> ledColor,
        BlocklyBlockProperties properties,
        BlocklyComment comment) {
        return new LightAction<>(port, color, mode, ledColor, properties, comment);
    }

    /**
     * @return {@link BrickLedColor} of the lights.
     */
    public IBrickLedColor getColor() {
        return this.color;
    }

    /**
     * @return ledColor from expression.
     */
    public Expr<V> getRgbLedColor() {
        return this.rgbLedColor;
    }

    /**
     * @return type of blinking.
     */
    public ILightMode getMode() {
        return this.mode;
    }

    /**
     * @return port.
     */
    public IActorPort getPort() {
        return this.port;
    }

    @Override
    public String toString() {
        return "LightAction [" + this.port + ", " + this.mode + ", " + this.color + ", " + this.rgbLedColor + "]";
    }

    @Override
    protected V accept(AstVisitor<V> visitor) {
        return ((AstActorLightVisitor<V>) visitor).visitLightAction(this);
    }

    /**
     * Transformation from JAXB object to corresponding AST object.
     *
     * @param block for transformation
     * @param helper class for making the transformation
     * @return corresponding AST object
     */
    public static <V> Phrase<V> jaxbToAst(Block block, Jaxb2AstTransformer<V> helper) {
        IRobotFactory factory = helper.getModeFactory();
        List<Value> values = helper.extractValues(block, (short) 1);
        Phrase<V> ledColor = helper.extractValue(values, new ExprParam(BlocklyConstants.COLOR, BlocklyType.COLOR));
        fields = helper.extractFields(block, (short) 3);
        isActor = helper.extractField(fields, BlocklyConstants.SENSORPORT, BlocklyConstants.NO_PORT).equals(BlocklyConstants.NO_PORT);
        isBlink = helper.extractField(fields, BlocklyConstants.SWITCH_STATE, BlocklyConstants.DEFAULT).equals(BlocklyConstants.DEFAULT);
        String port =
            isActor
                ? helper.extractField(fields, BlocklyConstants.ACTORPORT, BlocklyConstants.NO_PORT)
                : helper.extractField(fields, BlocklyConstants.SENSORPORT, BlocklyConstants.NO_PORT);

        String mode =
            isBlink
                ? helper.extractField(fields, BlocklyConstants.SWITCH_BLINK, BlocklyConstants.DEFAULT)
                : helper.extractField(fields, BlocklyConstants.SWITCH_STATE, BlocklyConstants.DEFAULT);
        String color = helper.extractField(fields, BlocklyConstants.SWITCH_COLOR, BlocklyConstants.DEFAULT);
        return LightAction.make(
            factory.getActorPort(port),
            factory.getBrickLedColor(color),
            factory.getBlinkMode(mode),
            helper.convertPhraseToExpr(ledColor),
            helper.extractBlockProperties(block),
            helper.extractComment(block));
    }

    @Override
    public Block astToBlock() {
        Block jaxbDestination = new Block();
        JaxbTransformerHelper.setBasicProperties(this, jaxbDestination);
        if ( !this.color.toString().equals(BlocklyConstants.DEFAULT) ) {
            JaxbTransformerHelper.addField(jaxbDestination, BlocklyConstants.SWITCH_COLOR, getColor().toString());
        }
        if ( !this.mode.toString().equals(BlocklyConstants.DEFAULT) ) {
            JaxbTransformerHelper.addField(jaxbDestination, isBlink ? BlocklyConstants.SWITCH_BLINK : BlocklyConstants.SWITCH_STATE, getMode().toString());
        }
        if ( !this.port.toString().equals(BlocklyConstants.NO_PORT) ) {
            JaxbTransformerHelper.addField(jaxbDestination, isActor ? BlocklyConstants.ACTORPORT : BlocklyConstants.SENSORPORT, getPort().toString());
        }
        if ( !this.rgbLedColor.toString().contains("EmptyExpr [defVal=COLOR]") ) {
            JaxbTransformerHelper.addValue(jaxbDestination, BlocklyConstants.COLOR, this.rgbLedColor);
        }
        return jaxbDestination;

    }
}