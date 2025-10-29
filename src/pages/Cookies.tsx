import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
            Πολιτική Cookies
          </h1>

          <div className="font-inter text-foreground space-y-6 leading-relaxed">
            <p className="text-muted-foreground">
              Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
            </p>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">1. Τι είναι τα Cookies</h2>
              <p>
                Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή σας όταν επισκέπτεστε έναν ιστότοπο. 
                Χρησιμοποιούνται ευρέως για να κάνουν τους ιστότοπους να λειτουργούν αποτελεσματικότερα, καθώς και να παρέχουν 
                πληροφορίες στους ιδιοκτήτες του ιστότοπου.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">2. Πώς Χρησιμοποιούμε τα Cookies</h2>
              <p className="mb-3">Χρησιμοποιούμε cookies για τους εξής σκοπούς:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Απαραίτητα Cookies:</strong> Αυτά τα cookies είναι απαραίτητα για τη λειτουργία του ιστότοπου</li>
                <li><strong>Cookies Απόδοσης:</strong> Μας επιτρέπουν να αναγνωρίζουμε και να μετράμε τον αριθμό επισκεπτών</li>
                <li><strong>Cookies Λειτουργικότητας:</strong> Χρησιμοποιούνται για να σας αναγνωρίζουν όταν επιστρέφετε στον ιστότοπό μας</li>
                <li><strong>Cookies Στόχευσης:</strong> Καταγράφουν την επίσκεψή σας στον ιστότοπό μας</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">3. Cookies Τρίτων</h2>
              <p>
                Ενδέχεται να χρησιμοποιούμε υπηρεσίες τρίτων όπως το Google Analytics για να αναλύσουμε τη χρήση του ιστότοπού μας. 
                Αυτές οι υπηρεσίες χρησιμοποιούν cookies για τη συλλογή πληροφοριών σχετικά με την επίσκεψή σας.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">4. Διαχείριση Cookies</h2>
              <p className="mb-3">
                Μπορείτε να ελέγξετε και/ή να διαγράψετε cookies όπως επιθυμείτε. Μπορείτε να διαγράψετε όλα τα cookies 
                που βρίσκονται ήδη στον υπολογιστή σας και μπορείτε να ρυθμίσετε τα περισσότερα προγράμματα περιήγησης 
                ώστε να αποτρέπουν την τοποθέτησή τους.
              </p>
              <p>
                Σημειώστε ότι η απενεργοποίηση των cookies μπορεί να επηρεάσει τη λειτουργικότητα αυτού και πολλών 
                άλλων ιστότοπων που επισκέπτεστε.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">5. Ενημερώσεις της Πολιτικής</h2>
              <p>
                Ενδέχεται να ενημερώνουμε την πολιτική cookies μας περιοδικά. Θα δημοσιεύουμε οποιεσδήποτε αλλαγές 
                σε αυτήν τη σελίδα με ενημερωμένη ημερομηνία έκδοσης.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">6. Περισσότερες Πληροφορίες</h2>
              <p>
                Για περισσότερες πληροφορίες σχετικά με τα cookies και πώς τα χρησιμοποιούμε, 
                ή εάν έχετε οποιεσδήποτε ερωτήσεις, επικοινωνήστε μαζί μας στο: info@lmanakainisi.gr
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
