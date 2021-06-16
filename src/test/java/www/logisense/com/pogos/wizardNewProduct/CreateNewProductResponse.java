package www.logisense.com.pogos.wizardNewProduct;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


import java.util.List;
@Getter
@Setter


public  class CreateNewProductResponse {


 private List<ProductCustomerTypes> productCustomerTypesCashed;

 private  String address;

 private City city;

 private double latitude;

 private List<ProductPrices> productPrices;

 private boolean active;

 private List<ProductTypes> productTypesCashed;

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

 private List<ProductWorkingDates> productWorkingDatesCashed;

 private double longitude;

 private List<ProductTags> productTags;




}


