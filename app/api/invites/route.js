import { sql } from "@vercel/postgres";

export async function GET(req) {
  try {
    const { rows: invites } = await sql`SELECT * FROM invites`;

    const invitesWithCounts = invites.map((invite) => ({
      id: invite.id,
      nom: invite.nom,
      prenom: invite.prenom,
      date_confirmation: invite.date_confirmation,
      is_family: invite.is_family,
      adultes: invite.adultes,
      enfants: invite.enfants,
      total_personnes: invite.adultes + invite.enfants,
    }));

    return new Response(JSON.stringify(invitesWithCounts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    console.log();

    // Ajoutez une valeur par défaut pour `date_confirmation`
    const date_confirmation =
      body.date_confirmation || new Date().toISOString();

    const { prenom, nom, isFamily, adultes, enfants } = body;

    if (!prenom || !nom) {
      return new Response(
        JSON.stringify({ error: "Les champs obligatoires sont manquants." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { rows } = await sql`
        INSERT INTO invites (prenom, nom, date_confirmation, is_family, adultes, enfants)
        VALUES (${prenom}, ${nom}, ${date_confirmation}, ${isFamily}, ${adultes}, ${enfants})
        RETURNING id
      `;

    return new Response(
      JSON.stringify({
        message: "Invité ajouté avec succès !",
        invite_id: rows[0].id,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'invité :", error.message);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({ error: "L'identifiant de l'invité est requis." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { rowCount } = await sql`
      DELETE FROM invites
      WHERE id = ${id}
    `;

    if (rowCount === 0) {
      return new Response(
        JSON.stringify({ error: "Aucun invité trouvé avec cet ID." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Invité supprimé avec succès !" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
