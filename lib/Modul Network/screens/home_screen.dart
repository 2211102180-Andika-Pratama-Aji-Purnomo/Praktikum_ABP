import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/cart_model.dart';
import '../models/item.dart';
import 'cart_screen.dart';
 
class HomeScreen extends StatelessWidget {
  HomeScreen({super.key});
 
  final List<Item> availableItems = [
    Item(id: 1, name: "Velg mutakin", price: 3000000),
    Item(id: 2, name: "Long Arm Dynorpo", price: 2000000),
    Item(id: 3, name: "Paket Bore Up 250CC", price: 30000000),
    Item(id: 4, name: "Knalpot Jhoe FulSystem", price: 15000000),
    Item(id: 5, name: "Monoshock Ohlins", price: 3000000),
  ];
 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("AndikaStore"),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const CartScreen()),
              );
            },
          ),
        ],
      ),
      body: ListView.builder(
        itemCount: availableItems.length,
        itemBuilder: (context, index) {
          final item = availableItems[index];
          return ListTile(
            title: Text(item.name),
            subtitle: Text("Rp ${item.price}"),
            trailing: ElevatedButton(
              onPressed: () {
                Provider.of<CartModel>(context, listen: false).add(item);
              },
              child: const Text("Tambah"),
            ),
          );
        },
      ),
    );
  }
}