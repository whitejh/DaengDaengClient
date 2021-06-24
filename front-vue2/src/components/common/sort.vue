<template>
  <div class="shop-toolbar padding-bottom-1x mb-2">
    <div class="shop-sorting">
      <label for="sorting"></label>
      <select class="form-control" id="sorting">
        <option>최신 순</option>
        <option>낮은 가격순</option>
        <option>높은 가격순</option>
        <option>오래된 순</option>
        <option>거래완료</option>
        <option>거래중</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shop-sorting{
	float:right;
}
</style>