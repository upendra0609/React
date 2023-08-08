interface ProductName{
    abstract function PrintName():void;
}

abstract class ProductPrice{
    function PrintPrice():void{
        log "Price = 12899.3";
    }
}

class Product extends ProductPrice  implements ProductName{
    override function PrintName():void{
        log "Name = Samsung TV";
    }
}

class _Main{
    static function main(args:string[]):void{
        var tv = new Product();
        tv.PrintName();
        tv.PrintPrice();
    }
}