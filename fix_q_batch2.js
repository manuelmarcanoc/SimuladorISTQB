const fs = require('fs');
const path = require('path');

const files = ['questions.json', 'questions_en.json', 'questions_fr.json', 'questions_pt.json'];

const fixes = {
  'questions.json': {
    id: 'q_batch2_zdybwbzfz',
    question: `Un sistema de descuentos para una tienda online aplica las siguientes reglas:

- Si el cliente es VIP Y el pedido es > $100: 20% descuento
- Si el cliente es VIP Y el pedido es ≤ $100: 10% descuento
- Si el cliente NO es VIP Y el pedido es > $100: 5% descuento
- Si el cliente NO es VIP Y el pedido es ≤ $100: sin descuento

¿Cuántas reglas de decisión se necesitan en la tabla de decisiones completa?`
  },
  'questions_en.json': {
    id: 'q_batch2_zdybwbzfz',
    question: `A discount system for an online store applies the following rules:

- If the customer is VIP AND the order is > $100: 20% discount
- If the customer is VIP AND the order is <= $100: 10% discount
- If the customer is NOT VIP AND the order is > $100: 5% discount
- If the customer is NOT VIP AND the order is <= $100: no discount

How many decision rules are needed in the complete decision table?`
  },
  'questions_fr.json': {
    id: 'q_batch2_zdybwbzfz',
    question: `Un système de remises pour une boutique en ligne applique les règles suivantes :

- Si le client est VIP ET la commande est > 100 $ : 20 % de remise
- Si le client est VIP ET la commande est <= 100 $ : 10 % de remise
- Si le client n'est PAS VIP ET la commande est > 100 $ : 5 % de remise
- Si le client n'est PAS VIP ET la commande est <= 100 $ : aucune remise

Combien de règles de décision sont nécessaires dans la table de décision complète ?`
  },
  'questions_pt.json': {
    id: 'q_batch2_zdybwbzfz',
    question: `Um sistema de descontos para uma loja online aplica as seguintes regras:

- Se o cliente for VIP E o pedido for > $100: 20% de desconto
- Se o cliente for VIP E o pedido for ≤ $100: 10% de desconto
- Se o cliente NÃO for VIP E o pedido for > $100: 5% de desconto
- Se o cliente NÃO for VIP E o pedido for ≤ $100: sem desconto

Quantas regras de decisão são necessárias na tabela de decisão completa?`
  }
};

files.forEach(file => {
  const p = path.join(__dirname, 'src', 'data', file);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    const fix = fixes[file];
    
    let changed = false;
    data.forEach(q => {
      if (q.id === fix.id && q.question !== fix.question) {
        q.question = fix.question;
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(p, JSON.stringify(data, null, 2));
      console.log(`Updated ${file}`);
    }
  }
});
