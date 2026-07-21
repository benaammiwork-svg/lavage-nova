export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="font-display text-3xl font-extrabold text-navy">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Sur ce site démo, les demandes de réservation sont principalement
        transmises via WhatsApp. Les informations que vous saisissez dans le
        formulaire (nom, téléphone, quartier) servent uniquement à préparer
        votre message de réservation. Aucune base de données client n’est
        connectée dans cette version démo.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Pour toute question : 0717 810 660.
      </p>
    </article>
  );
}
