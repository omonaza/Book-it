package www.logisense.com.pogos.wizardNewProduct;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class ProductTags {

    private String productId;

    private String parentTagId;

    private String subTagName;

    private String subTagId;
}
