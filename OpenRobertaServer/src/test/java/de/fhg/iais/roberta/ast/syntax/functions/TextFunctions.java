package de.fhg.iais.roberta.ast.syntax.functions;

import java.util.ArrayList;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;

import org.junit.Test;
import org.xml.sax.InputSource;

import de.fhg.iais.roberta.ast.syntax.BrickConfiguration;
import de.fhg.iais.roberta.ast.syntax.Phrase;
import de.fhg.iais.roberta.ast.transformer.JaxbTransformer;
import de.fhg.iais.roberta.blockly.generated.Project;
import de.fhg.iais.roberta.codegen.lejos.JavaGenerator;

public class TextFunctions {

    @Test
    public void concatination() throws Exception {
        JAXBContext jaxbContext = JAXBContext.newInstance(Project.class);
        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

        InputSource src = new InputSource(Math.class.getResourceAsStream("/syntax/functions/text_concat.xml"));
        Project project = (Project) jaxbUnmarshaller.unmarshal(src);

        generate(project);

        String a = "BlockAST [project=[[Funct [UPPERCASE, [Var [text]]]]]]";

        // Assert.assertEquals(a, transformer.toString());
    }

    private String generate(Project project) {
        JaxbTransformer transformer = new JaxbTransformer();
        transformer.projectToAST(project);
        BrickConfiguration brickConfiguration = new BrickConfiguration.Builder().build();
        JavaGenerator generator = new JavaGenerator("", brickConfiguration);
        for ( ArrayList<Phrase> instance : transformer.getProject() ) {
            generator.generateCodeFromPhrases(instance);
        }
        System.out.println(generator.getSb());
        return generator.getSb().toString();
    }
}