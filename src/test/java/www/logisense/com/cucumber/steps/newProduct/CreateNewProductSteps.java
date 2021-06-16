package www.logisense.com.cucumber.steps.newProduct;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Cookies;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import www.logisense.com.cucumber.steps.common.CommonData;
import www.logisense.com.pogos.wizardNewProduct.*;
import www.logisense.com.utility.ObjectConverter;
import www.logisense.com.utility.PropertiesReader;
import www.logisense.com.utility.RestHttpRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CreateNewProductSteps {

    private final CommonData commonData;


    public CreateNewProductSteps(CommonData commonData) {
        this.commonData = commonData;

    }



   private Cookies cookies;

    private static Logger logger;

    public static ProductRequest productRequest = new ProductRequest();
    public static ProductWorkingDates productWorkingDates1 = new ProductWorkingDates();
    public static ProductPrices productPrices = new ProductPrices();
    public static ProductPriceTypes productPriceTypes = new ProductPriceTypes();


    @Before
    public void setUp() {

        logger = LogManager.getLogger();
        logger.traceEntry("Enter the Application");
        logger.info("-------Start running scenario--------");

        RestAssured.baseURI = PropertiesReader.getPropertiesValue("Book_It_BaseURL");

        String token = PropertiesReader.getPropertiesValue("Token");

        cookies = RestAssured.given()
                .contentType(ContentType.JSON)
                .when()
                .body(token)
                .post("https://bookit-staging.logivote.com/api/authenticate")
                .then()
                .statusCode(200)
                .extract()
                .response()
                .getDetailedCookies();


    }


    @Given("^product is set with the following fields$")
    public void productIsSetWithTheFollowingFields(List<Map<String, String>> product) {


        productRequest.setName(product.get(0).get("name"));
        productRequest.setActive(Boolean.parseBoolean(product.get(0).get("active")));
        productRequest.setShortDescription(product.get(0).get("shortDescription"));
        productRequest.setFullDescription(product.get(0).get("fullDescription"));
        productRequest.setMostPopular(Boolean.parseBoolean(product.get(0).get("mostPopular")));
        productRequest.setLongitude(Double.parseDouble(product.get(0).get("longitude")));
        productRequest.setLatitude(Double.parseDouble(product.get(0).get("latitude")));
        productRequest.setCalendarColor(product.get(0).get("calendarColor"));
        productRequest.setAddress(product.get(0).get("address"));

    }


    @Given("^productTypes is set with following fields$")
    public void productTypesIsSetWithFollowingFields(List<Map<String, String>> productTypes) {

        ProductTypes productTypes1 = new ProductTypes();

        productTypes1.setId(productTypes.get(0).get("id"));
        productTypes1.setName(productTypes.get(0).get("name"));

        List<ProductTypes> productTypesList = new ArrayList<>();
        productTypesList.add(productTypes1);
        productRequest.setProductTypes(productTypesList);

    }

    @Given("^productWorkingDates is set with following fields$")
    public void productWorkingDatesIsSetWithFollowingFields(List<Map<String, String>> productWorkingDates) {

        productWorkingDates1.setFromDate(productWorkingDates.get(0).get("fromDate"));
        productWorkingDates1.setToDate(productWorkingDates.get(0).get("toDate"));
        productWorkingDates1.setName(productWorkingDates.get(0).get("name"));
        productWorkingDates1.setStrictHours((Boolean.getBoolean(productWorkingDates.get(0).get("strictHours"))));
        productWorkingDates1.setDeletedAt(productWorkingDates.get(0).get("deletedAt"));
        productWorkingDates1.setMaxUsedTicketsQuantity(Integer.parseInt(productWorkingDates.get(0).get("maxUsedTicketsQuantity")));
        productWorkingDates1.setErrorCode(Integer.parseInt(productWorkingDates.get(0).get("errorCode")));

        if (productWorkingDates1.getDeletedAt() != null) {
            productWorkingDates1.setDeletedAt(null);
        }


        List<ProductWorkingDates> listProductWorkingDates = new ArrayList<>();
        listProductWorkingDates.add(productWorkingDates1);
        productRequest.setProductWorkingDates(listProductWorkingDates);
    }


    @Given("^timeSlots is set with the following fields$")
    public void productTimeSlotsIsSetWithTheFollowingFields(List<Map<String, String>> timeSlots) {

        TimeSlots timeSlots1 = new TimeSlots();

        timeSlots1.setActive(Boolean.parseBoolean(timeSlots.get(0).get("active")));
        timeSlots1.setEndTime(timeSlots.get(0).get("endTime"));
        timeSlots1.setDayOfWeek(timeSlots.get(0).get("dayOfWeek"));
        timeSlots1.setDuration(timeSlots.get(0).get("duration"));

       timeSlots1.setQuantity(Integer.valueOf(timeSlots.get(0).get("quantity")));


        timeSlots1.setStartTime(timeSlots.get(0).get("startTime"));
        timeSlots1.setUsedQuantity(Integer.parseInt(timeSlots.get(0).get("usedQuantity")));

        List<TimeSlots> timeSlotsList = new ArrayList<>();
        timeSlotsList.add(timeSlots1);
        productWorkingDates1.setTimeSlots(timeSlotsList);

        List<ProductWorkingDates> listProductWorkingDates = new ArrayList<>();
        listProductWorkingDates.add(productWorkingDates1);
        productRequest.setProductWorkingDates(listProductWorkingDates);


    }


    @Given("^productRegions is set with the following fields$")
    public void productRegionsIsSetWithTheFollowingFields(List<Map<String, String>> regions) {

        ProductRegions productRegions = new ProductRegions();

        productRegions.setProductId(regions.get(0).get("productId"));
        productRegions.setRegionId(regions.get(0).get("regionId"));
        productRegions.setRegionName(regions.get(0).get("regionName"));

        List<ProductRegions> productRegionsList = new ArrayList<>();
        productRegionsList.add(productRegions);
        productRequest.setProductRegions(productRegionsList);

    }

    @Given("^productPrices is set with the following fields$")
    public void productPricesIsSetWithTheFollowingFields(List<Map<String, String>> prices) {

        productPrices.setProductId(prices.get(0).get("productId"));
        productPrices.setChannelId(prices.get(0).get("channelId"));
        productPrices.setFromDate(prices.get(0).get("fromDate"));
        productPrices.setToDate(prices.get(0).get("toDate"));
        productPrices.setTitle(prices.get(0).get("title"));
        productPrices.setRemarks(prices.get(0).get("remarks"));
        productPrices.setOfficialPrice(Integer.parseInt(prices.get(0).get("officialPrice")));
        productPrices.setCurrencyId(prices.get(0).get("currencyId"));
        productPrices.setQuantityPerDay(Integer.parseInt(prices.get(0).get("quantityPerDay")));
        productPrices.setAutoConfirm(Boolean.parseBoolean(prices.get(0).get("autoConfirm")));
        productPrices.setPricePerPerson(Boolean.parseBoolean(prices.get(0).get("pricePerPerson")));

        List<ProductPrices> productPricesList = new ArrayList<>();
        productPricesList.add(productPrices);
        productRequest.setProductPrices(productPricesList);


    }

    @Then("^productPriceTypes is set with the following dates$")
    public void productPriceTypesIsSetWithTheFollowingDates(List<Map<String, String>> priceTypes) {

        // have some changes in it

        productPriceTypes.setProductPriceId(priceTypes.get(0).get("productPriceId"));
        productPriceTypes.setProductCustomerTypeId(priceTypes.get(0).get("productCustomerTypeId"));
        productPriceTypes.setAmount(Integer.valueOf(priceTypes.get(0).get("amount")));
        productPriceTypes.setCurrencyId((priceTypes.get(0).get("currencyId")));
        productPriceTypes.setCurrencySymbol((priceTypes.get(0).get("currencySymbol")));
        productPriceTypes.setIsOfficial(Boolean.parseBoolean(priceTypes.get(0).get("isOfficial")));


        List<ProductPriceTypes> productPriceTypesList = new ArrayList<>();
        productPriceTypesList.add(productPriceTypes);
        productPrices.setProductPriceTypes(productPriceTypesList);

        List<ProductPrices> productPricesList = new ArrayList<>();
        productPricesList.add(productPrices);

        productRequest.setProductPrices(productPricesList);

    }

    @Given("^productCustomerType is set with the following fields$")
    public void productCustomerTypeIsSetWithTheFollowingFields(List<Map<String, String>> customerType) {

        ProductCustomerType productCustomerType = new ProductCustomerType();

        productCustomerType.setProductId(customerType.get(0).get("productId"));
        productCustomerType.setName(customerType.get(0).get("name"));
        productPriceTypes.setProductCustomerType(productCustomerType);

        List<ProductPriceTypes> productPriceTypesList = new ArrayList<>();
        productPriceTypesList.add(productPriceTypes);

        productPrices.setProductPriceTypes(productPriceTypesList);

        List<ProductPrices> productPricesList = new ArrayList<>();
        productPricesList.add(productPrices);

        productRequest.setProductPrices(productPricesList);


    }


    @Given("^productCustomerTypes is set with following fields$")
    public void productCustomerTypesIsSetWithFollowingFields(List<Map<String, String>> customerTypes) {

        ProductCustomerTypes productCustomerTypes = new ProductCustomerTypes();
        productCustomerTypes.setName(customerTypes.get(0).get("name"));


        List<ProductCustomerTypes> productCustomerTypesList = new ArrayList<>();

        productCustomerTypesList.add(productCustomerTypes);

        productRequest.setProductCustomerTypes(productCustomerTypesList);

    }

    @Given("^City is set with the following fields$")
    public void cityIsSetWithTheFollowingFields(List<Map<String, String>> city) {

        City city1 = new City();
        city1.setName(city.get(0).get("name"));
        city1.setRegionId(city.get(0).get("regionId"));

        productRequest.setCity(city1);

    }

    @Given("^productIncludedTags is set with the following fields$")
    public void productIncludedTagsIsSetWithTheFollowingFields(List<Map<String, String>> productIncludedTags) {

        ProductIncludedTags productIncludedTags1 = new ProductIncludedTags();
        productIncludedTags1.setSubTagId(productIncludedTags.get(0).get("subTagId"));
        productIncludedTags1.setSubTagName(productIncludedTags.get(0).get("subTagName"));

        List<ProductIncludedTags> productIncludedTagsList = new ArrayList<>();
        productIncludedTagsList.add(productIncludedTags1);

        productRequest.setProductIncludedTags(productIncludedTagsList);

    }


    @Given("^productExcludedTags is set with the following fields$")
    public void productExcludedTagsIsSetWithTheFollowingFields(List<Map<String, String>> productExcludedTags) {

        ProductExcludedTags productExcludedTags1 = new ProductExcludedTags();
        productExcludedTags1.setProductId(productExcludedTags.get(0).get("productId"));
        productExcludedTags1.setSubTagId(productExcludedTags.get(0).get("subTagId"));
        productExcludedTags1.setParentTagId(productExcludedTags.get(0).get("parentTagId"));
        productExcludedTags1.setSubTagName(productExcludedTags.get(0).get("subTagName"));

        List<ProductExcludedTags> productExcludedTagsList = new ArrayList<>();
        productExcludedTagsList.add(productExcludedTags1);
        productRequest.setProductExcludedTags(productExcludedTagsList);

    }

    @Given("^productTags is set with the following fields$")
    public void productTagsIsSetWithTheFollowingFields(List<Map<String, String>> productTags) {

        ProductTags productTags1 = new ProductTags();

        for (int i = 0; i < productTags.size(); i++) {
            productTags1.setProductId(productTags.get(i).get("productId"));
            productTags1.setSubTagId(productTags.get(i).get("subTagId"));
            productTags1.setParentTagId(productTags.get(i).get("parentTagId"));
            productTags1.setSubTagName(productTags.get(i).get("subTagName"));
        }

        List<ProductTags> productTagsList = new ArrayList<>();
        productTagsList.add(productTags1);

        productRequest.setProductTags(productTagsList);


    }


    @Given("^productVideos is set with the following fields$")
    public void productVideosIsSetWithTheFollowingFields(List<Map<String, String>> videos) {

        ProductVideos productVideos = new ProductVideos();

        productVideos.setPath(videos.get(0).get("path"));


        List<ProductVideos> productVideosList = new ArrayList<>();
        productVideosList.add(productVideos);
        productRequest.setProductVideos(productVideosList);

        System.out.println("azamat======> " + productRequest.toString());

    }


    @Given("^provider creates a new product$")
    public void providerCreatesANewProduct() {

        String newProd = ObjectConverter.convertObjectToJson(productRequest);

        CommonData.response = NewProductEndPoints.createProduct(newProd,cookies);


    }



    @Then("^verify that new product is set with following fields$")
    public void verifyThatNewProductIsSetWithFollowingFields(List<Map<String, String>> expectedProduct) {

        ProductRequest productRequest = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of name ", expectedProduct.get(0).get("name"), productRequest.getName());
        Assert.assertEquals("failure of isActive ", Boolean.parseBoolean(expectedProduct.get(0).get("active")), productRequest.isActive());
        Assert.assertEquals("failure of shortDescription ", expectedProduct.get(0).get("shortDescription"), productRequest.getShortDescription());
        Assert.assertEquals("failure of fullDescription ", expectedProduct.get(0).get("fullDescription"), productRequest.getFullDescription());
        Assert.assertEquals("failure of Longitude====> ",
                (expectedProduct.get(0).get("longitude")), String.valueOf(productRequest.getLongitude()));
        Assert.assertEquals("failure of Latitude====> ",
                expectedProduct.get(0).get("latitude"), (String.valueOf(productRequest.getLatitude())));

        Assert.assertEquals("failure of calendarColor ", expectedProduct.get(0).get("calendarColor"), productRequest.getCalendarColor());
        Assert.assertEquals("failure of address ", expectedProduct.get(0).get("address"), productRequest.getAddress());


    }


//    @Given("^verify that productTypes is set with following fields$")
//    public void verifyThatProductTypesIsSetWithFollowingFields(List<Map<String, String>> productTypes) {
//        ProductRequest actualProd = ObjectConverter.convertJsonToObject(response.body().asString(), ProductRequest.class);
//        try{
//
//            if(actualProd.getProductTypes().get(0).getName()!=null){
//                System.out.println("vale in ProductTypes " +actualProd.getProductTypes().get(0).getName());
//            }
//
//        }catch (Exception e){
//            System.out.println(e);
//
//        }
//
//        Assert.assertEquals("failure of name ", productTypes.get(0).get("name"), actualProd.getProductTypes().get(0).getName());
//
//    }


    @Given("^verify that ProductWorkingDates is set with following fields$")
    public void verifyThatProductWorkingDatesIsSetWithFollowingFields(List<Map<String, String>> expectedProductWorkingDates) {

        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of fromDate ", expectedProductWorkingDates.get(0).get("fromDate"),
                actualProd.getProductWorkingDates().get(0).getFromDate());

        Assert.assertEquals("failure of toDate ", expectedProductWorkingDates.get(0).get("toDate"),
                actualProd.getProductWorkingDates().get(0).getToDate());

        Assert.assertEquals("failure of name ", expectedProductWorkingDates.get(0).get("name"),
                actualProd.getProductWorkingDates().get(0).getName());


        Assert.assertEquals("failure of strictHours ", Boolean.parseBoolean(expectedProductWorkingDates.get(0).get("strictHours")),
                actualProd.getProductWorkingDates().get(0).isStrictHours());

        Assert.assertEquals("failure of maxUsedTicketsQuantity ", Integer.valueOf(expectedProductWorkingDates.get(0).get("maxUsedTicketsQuantity")),
                actualProd.getProductWorkingDates().get(0).getMaxUsedTicketsQuantity());

        Assert.assertEquals("failure of errorCode ", Integer.valueOf(expectedProductWorkingDates.get(0).get("errorCode")),
                actualProd.getProductWorkingDates().get(0).getErrorCode());
    }

    @Given("^verify that timeSlots is set with following fields$")
    public void verifyThatTimeSlotsIsSetWithFollowingFields(List<Map<String, String>> expectedTimeSlots) {

        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of active ", Boolean.parseBoolean(expectedTimeSlots.get(0).get("active")),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).isActive());
        Assert.assertEquals("failure of entTime ", expectedTimeSlots.get(0).get("endTime"),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).getEndTime());

        Assert.assertEquals("failure of dayOfWeek ", expectedTimeSlots.get(0).get("dayOfWeek"),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).getDayOfWeek());

        Assert.assertEquals("failure of duration ", expectedTimeSlots.get(0).get("duration"),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).getDuration());

        Assert.assertEquals("failure of quantity ", (Integer.valueOf(expectedTimeSlots.get(0).get("quantity"))),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).getQuantity());

        Assert.assertEquals("failure of startTime ", expectedTimeSlots.get(0).get("startTime"),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).getStartTime());

        Assert.assertEquals("failure of usedQuantity ", Integer.valueOf(expectedTimeSlots.get(0).get("usedQuantity")),
                actualProd.getProductWorkingDates().get(0).getTimeSlots().get(0).getUsedQuantity());


    }

    @Given("^verify that productRegions is set with following fields$")
    public void verifyThatProductRegionsIsSetWithFollowingFields(List<Map<String, String>> expectedProductRegions) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of regionName ", expectedProductRegions.get(0).get("regionName"),
                actualProd.getProductRegions().get(0).getRegionName());

    }

    @Given("^verify that productPrices is set with following field$")
    public void verifyThatProductPricesIsSetWithFollowingField(List<Map<String, String>> expectedProductPrices) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of fromDate", expectedProductPrices.get(0).get("fromDate"),
                actualProd.getProductPrices().get(0).getFromDate());


        Assert.assertEquals("failure of toDate", expectedProductPrices.get(0).get("toDate"),
                actualProd.getProductPrices().get(0).getToDate());


        Assert.assertEquals("failure of title", expectedProductPrices.get(0).get("title"),
                actualProd.getProductPrices().get(0).getTitle());


        Assert.assertEquals("failure of remarks", expectedProductPrices.get(0).get("remarks"),
                actualProd.getProductPrices().get(0).getRemarks());


        Assert.assertEquals("failure of officialPrice", Integer.valueOf(expectedProductPrices.get(0).get("officialPrice")),
                actualProd.getProductPrices().get(0).getOfficialPrice());


        Assert.assertEquals("failure of quantityPerDay", Integer.valueOf(expectedProductPrices.get(0).get("quantityPerDay")),
                actualProd.getProductPrices().get(0).getQuantityPerDay());

        Assert.assertEquals("failure of autoConfirm", Boolean.valueOf(expectedProductPrices.get(0).get("autoConfirm")),
                actualProd.getProductPrices().get(0).getAutoConfirm());

        Assert.assertEquals("failure of pricePerPerson", Boolean.valueOf(expectedProductPrices.get(0).get("pricePerPerson")),
                actualProd.getProductPrices().get(0).getPricePerPerson());

    }

    @Given("^verify that productPriceTypes is set with following fields$")
    public void verifyThatProductPriceTypesIsSetWithFollowingFields(List<Map<String, String>> expectedProductPriceTypes) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of amount ", Integer.valueOf(expectedProductPriceTypes.get(0).get("amount")),
                actualProd.getProductPrices().get(0).getProductPriceTypes().get(0).getAmount());

        Assert.assertEquals("failure of isOfficial ", Boolean.valueOf(expectedProductPriceTypes.get(0).get("isOfficial")),
                actualProd.getProductPrices().get(0).getProductPriceTypes().get(0).getIsOfficial());

    }

    @Given("^verify that productCustomerType is set with following fields$")
    public void verifyThatProductCustomerTypeIsSetWithFollowingFields(List<Map<String, String>> expectedProductCustomerType) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of name ", expectedProductCustomerType.get(0).get("name"),
                actualProd.getProductPrices().get(0).getProductPriceTypes().get(0).getProductCustomerType().getName());

    }

    @Given("^verify that productCustomerTypes is set with following fields$")
    public void verifyThatProductCustomerTypesIsSetWithFollowingFields(List<Map<String, String>> expectedProductCustomerTypes) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of name ", expectedProductCustomerTypes.get(0).get("name"),
                actualProd.getProductCustomerTypes().get(0).getName());

    }


    @Given("^verify that city is set with following fields$")
    public void verifyThatCityIsSetWithFollowingFields(List<Map<String, String>> expectedCity) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of name ", expectedCity.get(0).get("name"),
                actualProd.getCity().getName());

    }

    @Given("^verify that productIncludedTags is set with following fields$")
    public void verifyThatProductIncludedTagsIsSetWithFollowingFields(List<Map<String, String>> expectedProductIncludedTags) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of subTagName ", expectedProductIncludedTags.get(0).get("subTagName"),
                actualProd.getProductIncludedTags().get(0).getSubTagName());

    }

    @Given("^verify that productExcludedTags is set with following fields$")
    public void verifyThatProductExcludedTagsIsSetWithFollowingFields(List<Map<String, String>> expectedProductExcludedTags) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of subTagName ", expectedProductExcludedTags.get(0).get("subTagName"),
                actualProd.getProductExcludedTags().get(0).getSubTagName());
    }

    @Given("^verify that productTags is set with following fields$")
    public void verifyThatProductTagsIsSetWithFollowingFields(List<Map<String, String>> expectedProductTags) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of subTagName ", expectedProductTags.get(0).get("subTagName"), actualProd.getProductTags().get(0).getSubTagName());

    }


    @Given("^verify that productVideos is set with following fields$")
    public void verifyThatProductVideosIsSetWithFollowingFields(List<Map<String, String>> expectedProductVideos) {
        ProductRequest actualProd = ObjectConverter.convertJsonToObject(CommonData.response.body().asString(), ProductRequest.class);

        Assert.assertEquals("failure of path ", expectedProductVideos.get(0).get("path"),
                actualProd.getProductVideos().get(0).getPath());

    }

    @After
    public void tearDown() {


        //      logger.traceExit();
        logger.traceExit("Exit the Application");
        logger.info("--------Stop running--------");
    }

    public static void main(String[] args) {
        // string
        String str = "saff";
        // string to boolean
        // boolean bool = Boolean.parseBoolean(str);
        int Inter = Integer.parseInt(str);
        // returned boolean value
        System.out.println(Inter);

    }


}