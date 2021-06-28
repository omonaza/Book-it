package www.logisense.com.pogos.wizardNewProduct;



import lombok.Data;

import java.util.List;
@Data

public class ProductWorkingDates {
    private String productId;
    private String fromDate;
    private String toDate;
    private String name;
    private boolean strictHours;
    private List<TimeSlots> timeSlots;
    private String deletedAt;
    private Integer maxUsedTicketsQuantity;
    private  Integer errorCode;
}
