import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-eidt.component.html',
  styleUrls: ['./product-eidt.component.css']
})
export class ProductEidtComponent implements OnInit {
  // @ts-ignore
  productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });
  // @ts-ignore
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);

      // @ts-ignore
      this.productForm.setValue(product);
    });
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct() {
    const product = this.productForm.value;
    console.log(product)
    this.productService.update(this.productForm.value.id, product);
    alert('Cập nhật thành công');
    // @ts-ignore
    $("#exampleModal").modal("hide");
    this.router.navigate(['/product/list'])




  }

}
