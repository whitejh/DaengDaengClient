package com.dignity.puppymarket.dto.Item;

import com.dignity.puppymarket.domain.BigCategory;
import com.dignity.puppymarket.domain.ChatRoom;
import com.dignity.puppymarket.domain.Gu;
import com.dignity.puppymarket.domain.MidCategory;
import com.dignity.puppymarket.domain.Review;
import com.dignity.puppymarket.domain.Si;
import com.dignity.puppymarket.domain.User;
import com.dignity.puppymarket.domain.Wish;
import com.dignity.puppymarket.dto.ItemImageResponseDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class ItemGetResponseDto {
    private Long id;

    private String name;

    private int price;

    private String description;

    private int hit;

    private BigCategory bigCategory;

    private MidCategory midCategory;

    private LocalDateTime createdAt;

    private Si si;

    private Gu gu;

    private User seller;

    private User buyer;

    private List<ItemImageResponseDto> itemImageList;

    private Wish wish;

    private Review review;

    private ChatRoom chatRoom;
}
