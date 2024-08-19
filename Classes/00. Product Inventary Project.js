class Product:
    def __init__(self, name, price, product_id, quantity):
        self.name = name
        self.price = price
        self.product_id = product_id
        self.quantity = quantity

    class Inventory:
        def __init__(self):
            self.products = []

        def add_product(self, name, price, product_id, quantity):
            product = Product(name, price, product_id, quantity)
            self.products.append(product)
            return product

        def remove_product(self, name, product_id):
            for product in self.products:
                if product.product_id == product_id and product.name == name:
                    self.products.remove(product)
                return
    
        def tracking_product(self, product_id):
            for product in self.products:
                if product.product_id == product_id:
                    return product.quantity

        def list_all_products(self):
            return self.products
    
        def value_of_inventory(self):
            total = 0
            for product in self.products:
                total = total + product.price*product.quantity
            return total
    


object = Product("apple", 2, 1, 10)
object2 = Product("banana", 3, 2, 20)
object3 = Product("orange", 4, 3, 30)
object4 = Product("grape", 5, 4, 40)




inventory = Product.Inventory()
inventory.add_product("cheese", 2, 1, 10)
inventory.remove_product("banana", 2)
inventory.tracking_product(30)

print(inventory.list_all_products())
inventory.value_of_inventory()


inventory.list_all_products()
