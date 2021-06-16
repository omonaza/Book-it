package www.logisense.com.pogos.wizardNewProduct;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data

public class ProductRequest {

    private List<ProductCustomerTypes> productCustomerTypes;

    private String address;

    private City city;

    private double latitude;

    private List<ProductPrices> productPrices;

    private boolean active;

    private List<ProductTypes> productTypes;

    private List<ProductVideos> productVideos;

    private String shortDescription;

    private String cityId;

    private String fullDescription;

    private boolean mostPopular;

    private String productTypeId;

    private String createdAt;

    private List<ProductRegions> productRegions;

    private String calendarColor;

    private List<ProductExcludedTags> productExcludedTags;

    private String name;

    private List<ProductIncludedTags> productIncludedTags;

    private List<ProductWorkingDates> productWorkingDates;

    private double longitude;

    private List<ProductTags> productTags;


}
