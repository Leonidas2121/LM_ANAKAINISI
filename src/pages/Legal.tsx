import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
            Στοιχεία Γ.Ε.ΜΗ.
          </h1>

          <div className="font-inter text-foreground space-y-8 leading-relaxed">
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Επωνυμία Εταιρείας
              </h2>
              <p className="text-lg">LM ΑΝΑΚΑΙΝΙΣΗ Ι.Κ.Ε.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Στοιχεία Επικοινωνίας
              </h2>
              <div className="space-y-3">
                <p><strong>Έδρα:</strong> Λεωφόρος Αθηνών 123, Αθήνα, 10431</p>
                <p><strong>Τηλέφωνο:</strong> +30 210 123 4567</p>
                <p><strong>Email:</strong> info@lmanakainisi.gr</p>
                <p><strong>Website:</strong> www.lmanakainisi.gr</p>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Στοιχεία Γ.Ε.ΜΗ.
              </h2>
              <div className="space-y-3">
                <p><strong>Αριθμός Γ.Ε.ΜΗ.:</strong> 123456789</p>
                <p><strong>Αρ. Μητρώου:</strong> 123456/01/Β/12/34</p>
                <p><strong>Α.Φ.Μ.:</strong> 123456789</p>
                <p><strong>Δ.Ο.Υ.:</strong> Αθηνών</p>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Νόμιμος Εκπρόσωπος
              </h2>
              <div className="space-y-3">
                <p><strong>Όνομα:</strong> [Όνομα Διαχειριστή]</p>
                <p><strong>Ιδιότητα:</strong> Διαχειριστής</p>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Δραστηριότητα
              </h2>
              <p>
                Η εταιρεία δραστηριοποιείται στον τομέα των οικοδομικών ανακαινίσεων και κατασκευών, 
                προσφέροντας ολοκληρωμένες λύσεις για κατοικίες, διαμερίσματα και επαγγελματικούς χώρους.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Αδειοδότηση και Πιστοποιήσεις
              </h2>
              <div className="space-y-3">
                <p>• Άδεια λειτουργίας οικοδομικής επιχείρησης</p>
                <p>• Πιστοποίηση ISO 9001:2015</p>
                <p>• Ασφαλιστική κάλυψη επαγγελματικής ευθύνης</p>
                <p>• Μέλος Επιμελητηρίου</p>
              </div>
            </section>

            <section className="mt-8 p-6 border-l-4 border-l-accent bg-accent/5 rounded">
              <p className="text-sm text-muted-foreground italic">
                Σημείωση: Τα στοιχεία που εμφανίζονται σε αυτήν τη σελίδα είναι ενδεικτικά. 
                Για την πλήρη και επίσημη πληροφόρηση, παρακαλούμε ανατρέξτε στο πιστοποιητικό του Γ.Ε.ΜΗ. 
                ή επικοινωνήστε μαζί μας.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
