import { PrismaClient, stocks, User } from "@prisma/client";
import JSONbig from 'json-bigint';

const prisma = new PrismaClient();

enum type {
  medicament,
  materiel
}

// export async function CreateStock(data: {
//   quantite_disponible: string;
//   id_stock: string;
//   nom: string;
//   description: string;
//   type: type;
// }): Promise<SerializedStocks | null> {
//   try {
//       const stock = await prisma.stocks.create({
//           data: {
//               quantite_disponible: parseInt(data.quantite_disponible, 10),
//               type: data.type,
//               id_stock: parseInt(data.id_stock, 10),
//               nom: data.nom,
//               description: data.description
//           },
//       });
//       const serializedStocks: SerializedStocks = JSON.parse(
//           JSONbig.stringify(stock)
//       );
//       const stock = await prisma.stocks.findUnique({
//           where: { id_stock: BigInt(data.id_stock) },
//       });

//       if (!stock) {
//           throw new Error("Stock non trouvée.");
//       }
//       await prisma.stocks.update({
//           where: { id_stock: BigInt(data.id_stock) },
//           data: {
//               quantite_disponible: stock.quantite_disponible + BigInt(data.quantite),
//           },
//       });

//       await prisma.mouvements.create({
//           data: {
//               id_stock: BigInt(data.id_stock),
//               type_mouvement: "entree",
//               quantite: BigInt(data.quantite),
//               id_stock: BigInt(stock.id_stock),
//           },
//       });

//       return serializedStocks;
//   } catch (error) {
//       console.error("Error creating stock:", error);
//       throw new Error("Failed to create stock");
//   }
// }

export interface SerializedStocks {
  id_stock: number;
  nom: string;
  description: string;
  quantite_disponible: number;
  type: type;
}

export async function GetAllStocks(): Promise<SerializedStocks[]> {
  try {
    const stocks = await prisma.stocks.findMany();
    const serializedStocks: SerializedStocks[] = JSON.parse(JSONbig.stringify(stocks));
    console.error("stocks", serializedStocks);
    return serializedStocks;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch stocks");
  }
}