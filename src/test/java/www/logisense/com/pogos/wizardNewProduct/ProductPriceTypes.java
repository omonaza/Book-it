package www.logisense.com.pogos.wizardNewProduct;


import lombok.Data;


@Data

public class ProductPriceTypes {

    private Integer amount;

    private ProductCustomerType productCustomerType;

    private String productCustomerTypeId;

    private String currencySymbol;

    private String productPriceId;

    private String currencyId;

    private Boolean isOfficial;
}
