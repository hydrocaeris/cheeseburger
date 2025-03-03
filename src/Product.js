import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    // Inisialisasi state dengan productItem = "Beras"
    this.state = { productItem: "Beras" };
  }

  // Fungsi untuk mengubah productItem menjadi "Minyak"
  changeProduct = () => {
    this.setState({ productItem: "Minyak" });
  };

  render() {
    return (
      <div>
        <h1>Produk Pilihan: {this.state.productItem}</h1>
        <button type="button" onClick={this.changeProduct}>
          Ubah Produk
        </button>
      </div>
    );
  }
}

// Ekspor sebagai default
export default Product;