// 제품 상세 페이지 입니다.

<template>

		<!-- Page Content-->
		<div class="container padding-bottom-3x mb-1">
			<div class="row">
				<!-- 상품 정보 관련 -->
				<div class="col-md-6">
					<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
						<img src="@/assets/img/shop/single/01.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
						<img src="@/assets/img/shop/single/02.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
						<img src="@/assets/img/shop/single/03.jpg" class="d-block w-100" alt="...">
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
					</div>
				</div>
				<!-- Product Info-->
				<div class="col-md-6">
					<div class="padding-top-2x mt-2 hidden-md-up"></div>
					<div class="rating-stars"></div>
					<span class="text-muted align-middle" style="float: right"
						>&nbsp;&nbsp;카테고리 | 대형 | 강아지 옷 &nbsp;&nbsp;&nbsp;&nbsp;2분
						전<br />
					</span>

					<v-row text-center>
						<v-col cols="6" style="margin-left: 10px">
							<img
								src="/img/account/user-ava-md.jpg"
								style="width: 50px; height: 50px"
								alt="Daniel Adams"
							/>
							<span>&nbsp;Nickname</span>
							<span>
								<b-dropdown id="dropdown-1" text="" class="m-md-2">
									<b-dropdown-item>프로필 보기</b-dropdown-item>
									<b-dropdown-item @click="toggleModal"
										>신고하기</b-dropdown-item
									>
									<!-- 신고 모달  -->
									<b-modal
										id="modal-1"
										title="신고 정보"
										v-model="modalShown"
	
									>
										<form ref="form" @submit.stop.prevent="handleSubmit">
											<textarea
												class="form-control"
												id="textarea-input"
												rows="5"
												placeholder="상세 내용을 작성해주세요."
											></textarea>
										</form>
									</b-modal>
								</b-dropdown>
							</span>
						</v-col>
					</v-row>

					<p style="margin-top: 50px">
						<span style="font-size: 30px">{{this.goods.name}}</span
						><span>
							<img
								src="/img/km/view.png"
								style="width: 20px; height: 20px; margin-left: 100px"
								alt="Daniel Adams"
						/></span>
						<span>2</span
						><span>
							<img
								src="/img/km/heart.png"
								style="width: 20px; height: 20px"
								alt="Daniel Adams"
						/></span>
						<span>10</span>
					</p>
					<hr style="border: solid 0.5px grey; margin-bottom: 5px" />
					<div class="row">
						<div class="col-12" style="font-size: 15px">
							<ul class="list-group">
								<li class="list-group-item">
									가격: {{this.goods.price}}원
								</li>
								<li class="list-group-item">
									네고여부: 가능
								</li>
								<li class="list-group-item">
									거래희망지역:{{this.goods.wanted_location}}
								</li>
							</ul>
						</div>
					</div>

					<h4 class="text-muted text-normal">
						<br />
					</h4>
					<h6>
						{{this.goods.description}}
					</h6>
					<br /><br />

					<hr class="mb-3" />
					<div class="d-flex flex-wrap justify-content-between">
						<div class="entry-share mt-2 mb-2">
							<span class="text-muted">Share:</span>
							<div class="share-links">
								<a
									class="social-button shape-circle sb-facebook"
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Facebook"
									><i class="socicon-facebook"></i></a
								><a
									class="social-button shape-circle sb-twitter"
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Twitter"
									><i class="socicon-twitter"></i></a
								><a
									class="social-button shape-circle sb-instagram"
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Instagram"
									><i class="socicon-instagram"></i></a
								><a
									class="social-button shape-circle sb-google-plus"
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Google +"
									><i class="socicon-googleplus"></i
								></a>
							</div>
						</div>
						<div class="sp-buttons mt-2 mb-2">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-primary"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								<i class="icon-bag"></i> 댕댕톡
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				class="owl-carousel"
				data-owl-carousel='{ "nav": false, "dots": true, "margin": 30, "responsive": {"0":{"items":1},"576":{"items":2},"768":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
			>
				<!-- Product-->
				<div class="grid-item">
					<div class="product-card">
						<div class="product-badge text-danger">
							22% Off
						</div>
						<a class="product-thumb" href="shop-single.html"
							><img src="/img/shop/products/09.jpg" alt="Product"
						/></a>
						<h3 class="product-title">
							<a href="shop-single.html">Rocket Dog</a>
						</h3>
						<h4 class="product-price"><del>$44.95</del>$34.99</h4>
						<div class="product-buttons">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-outline-primary btn-sm"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<!-- Product-->
				<div class="grid-item">
					<div class="product-card">
						<div class="rating-stars">
							<i class="icon-star filled"></i><i class="icon-star filled"></i
							><i class="icon-star filled"></i><i class="icon-star filled"></i
							><i class="icon-star"></i>
						</div>
						<a class="product-thumb" href="shop-single.html"
							><img src="/img/shop/products/03.jpg" alt="Product"
						/></a>
						<h3 class="product-title">
							<a href="shop-single.html">Oakley Kickback</a>
						</h3>
						<h4 class="product-price">
							$155.00
						</h4>
						<div class="product-buttons">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-outline-primary btn-sm"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<!-- Product-->
				<div class="grid-item">
					<div class="product-card">
						<a class="product-thumb" href="shop-single.html"
							><img src="/img/shop/products/12.jpg" alt="Product"
						/></a>
						<h3 class="product-title">
							<a href="shop-single.html">Vented Straw Fedora</a>
						</h3>
						<h4 class="product-price">
							$49.50
						</h4>
						<div class="product-buttons">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-outline-primary btn-sm"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<!-- Product-->
				<div class="grid-item">
					<div class="product-card">
						<div class="rating-stars">
							<i class="icon-star filled"></i><i class="icon-star filled"></i
							><i class="icon-star filled"></i><i class="icon-star filled"></i
							><i class="icon-star filled"></i>
						</div>
						<a class="product-thumb" href="shop-single.html"
							><img src="/img/shop/products/11.jpg" alt="Product"
						/></a>
						<h3 class="product-title">
							<a href="shop-single.html">Top-Sider Fathom</a>
						</h3>
						<h4 class="product-price">
							$90.00
						</h4>
						<div class="product-buttons">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-outline-primary btn-sm"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<!-- Product-->
				<div class="grid-item">
					<div class="product-card">
						<a class="product-thumb" href="shop-single.html"
							><img src="/img/shop/products/04.jpg" alt="Product"
						/></a>
						<h3 class="product-title">
							<a href="shop-single.html">Waist Leather Belt</a>
						</h3>
						<h4 class="product-price">
							$47.00
						</h4>
						<div class="product-buttons">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-outline-primary btn-sm"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<!-- Product-->
				<div class="grid-item">
					<div class="product-card">
						<div class="product-badge text-danger">
							50% Off
						</div>
						<a class="product-thumb" href="shop-single.html"
							><img src="/img/shop/products/01.jpg" alt="Product"
						/></a>
						<h3 class="product-title">
							<a href="shop-single.html">Unionbay Park</a>
						</h3>
						<h4 class="product-price"><del>$99.99</del>$49.99</h4>
						<div class="product-buttons">
							<button
								class="btn btn-outline-secondary btn-sm btn-wishlist"
								data-toggle="tooltip"
								title="Whishlist"
							>
								<i class="icon-heart"></i>
							</button>
							<button
								class="btn btn-outline-primary btn-sm"
								data-toast
								data-toast-type="success"
								data-toast-position="topRight"
								data-toast-icon="icon-circle-check"
								data-toast-title="Product"
								data-toast-message="successfuly added to cart!"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getOneGoods} from '../api/Goods';
import {getImage} from '../api/Image';
export default {
	
	data: () => ({
		modalShown: false,
		goods : []
		
	}),
	methods: {
		toggleModal() {
			this.modalShown = !this.modalShown;
		},
	},
	async created() {
		const itemId = this.$route.params.id;
		try{
			const response = await getOneGoods(itemId);	
			const response2=await getImage(itemId);	
			console.log(response.data);
			this.goods = response.data;
		}
		catch(error){
			alert(error)
		}
		
	}
};
</script>

<style scoped>
.offcanvas-wrapper {
	z-index: 1;
}
.col-sm-6 {
	margin-left: 10px;
}
.carousel-indicators button{
	background-color:black;
}
</style>