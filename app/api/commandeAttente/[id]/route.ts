import { NextRequest, NextResponse } from "next/server";
import { DeleteCommande, UpdateStatutCommande } from "@/services/commandeService";
import { $Enums } from "@prisma/client";


export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Commande ID is required." },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { statut, id_stock, quantite } = body;

    if (!statut) {
      return NextResponse.json(
        { error: "Statut is required for update." },
        { status: 400 }
      );
    }
    
    // if (statut === "invalidee") {
    //   const updatedCommande = await UpdateStatutCommande({
    //     id_commande: id,
    //     statut: statut as $Enums.statut_commande,
    //     id_stock: id_stock, 
    //     quantite: quantite, 
    //   });
      
    //   return NextResponse.json(updatedCommande, { status: 200 });
    // }
    
    const updatedCommande = await UpdateStatutCommande({
      id_commande: id,
      statut: statut as $Enums.statut_commande,
      id_stock: id_stock,
      quantite: quantite,
    });
    
    if (!updatedCommande) {
      return NextResponse.json(
        { error: "Failed to update commande." },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedCommande, { status: 200 });
  } catch (error) {
    console.error("Error updating commande:", error);
    return NextResponse.json(
      { error: `${(error as Error).message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Commande_id est requis." },
        { status: 400 }
      );
    }

    const commandeDeleted = await DeleteCommande(id);

    if (!commandeDeleted) {
      return NextResponse.json({
        error: "Erreur lors de la suppression commande.",
      });
    }

    return NextResponse.json(
      { message: "Commande supprimer avec succèss." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "erreur lors de la suppression commande." },
      { status: 500 }
    );
  }
}