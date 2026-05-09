import './Desafio10.css';

const Desafio10 = () => {
  const produtos = [
    { id: 1, nome: "Headphone Bluetooth", preco: "R$ 299,00", categoria: "Tecnologia" },
    { id: 2, nome: "Tênis Esportivo", preco: "R$ 450,00", categoria: "Moda" },
    { id: 3, nome: "Relógio Inteligente", preco: "R$ 890,00", categoria: "Acessórios" },
    { id: 4, nome: "Cadeira Gamer", preco: "R$ 1.200,00", categoria: "Móveis" },
  ];

  return (
    <section className="vitrine-container">
      {produtos.map((produto) => (
        <article key={produto.id} className="product-card">
          {/* Imagem AQUIII */}
          <div className="product-image">
            <span>SEM IMAGEM</span>
          </div>

          <div className="product-info">
            <span className="category">{produto.categoria}</span>
            <h2 className="product-name">{produto.nome}</h2>
            <p className="price">{produto.preco}</p>
            <button className="buy-button">Comprar Agora</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Desafio10;