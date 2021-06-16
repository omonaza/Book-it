package www.logisense.com.utility;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertiesReader {

    static Properties properties;
    static final String FILE_PATH;

    static {
        FILE_PATH = "src/test/resources/properties/configs.properties";

        FileInputStream input;

        try {
            input = new FileInputStream(FILE_PATH);
            properties = new Properties();
            properties.load(input);
            input.close();
        } catch (IOException e) {
            System.out.println("File not found");
        }
    }

    public static String getPropertiesValue(String key) {
        return properties.getProperty(key);
    }


}
