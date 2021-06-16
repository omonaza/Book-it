package www.logisense.com.pogos.wizardNewProduct;



import lombok.Data;

import java.util.List;


@Data

public class ProductPrices {

    private String productId;

    private String toDate;

    private String title;

    private String fromDate;

    private String deletedAt;

    private Integer officialPrice;

    private Boolean autoConfirm;

    private Boolean pricePerPerson;

    private List<ProductPriceTypes> productPriceTypes;

    private String currencyId;

    private Integer quantityPerDay;

    private String channelId;

    private String remarks;

}
