package www.logisense.com.pogos.wizardNewProduct;


import lombok.Data;

@Data

public class TimeSlots {
    private String startTime;
    private String endTime;
    private String duration;
    private Integer quantity;
    private Integer usedQuantity;
    private boolean active;
    private String deletedAt;
    private String dayOfWeek;
}
