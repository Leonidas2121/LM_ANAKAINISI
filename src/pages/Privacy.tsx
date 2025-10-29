import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
            Πολιτική Απορρήτου
          </h1>

          <div className="font-inter text-foreground space-y-6 leading-relaxed">
            <p className="text-muted-foreground">
              Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
            </p>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">1. Εισαγωγή</h2>
              <p>
                Η LM ΑΝΑΚΑΙΝΙΣΗ σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. 
                Αυτή η πολιτική απορρήτου θα σας ενημερώσει για το πώς φροντίζουμε τα προσωπικά σας δεδομένα όταν 
                επισκέπτεστε τον ιστότοπό μας και θα σας ενημερώσει για τα δικαιώματά σας απορρήτου.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">2. Δεδομένα που συλλέγουμε</h2>
              <p className="mb-3">Μπορούμε να συλλέξουμε, να χρησιμοποιήσουμε, να αποθηκεύσουμε και να μεταφέρουμε διαφορετικά είδη προσωπικών δεδομένων για εσάς τα οποία έχουμε ομαδοποιήσει ως εξής:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Δεδομένα Ταυτότητας: όνομα, επώνυμο</li>
                <li>Δεδομένα Επικοινωνίας: διεύθυνση email, τηλεφωνικοί αριθμοί</li>
                <li>Τεχνικά Δεδομένα: διεύθυνση IP, τύπος προγράμματος περιήγησης</li>
                <li>Δεδομένα Χρήσης: πληροφορίες για τον τρόπο χρήσης του ιστότοπού μας</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">3. Πώς χρησιμοποιούμε τα δεδομένα σας</h2>
              <p className="mb-3">Χρησιμοποιούμε τα προσωπικά σας δεδομένα για:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Να επικοινωνήσουμε μαζί σας σχετικά με τις υπηρεσίες μας</li>
                <li>Να απαντήσουμε στα αιτήματά σας για προσφορές</li>
                <li>Να βελτιώσουμε τον ιστότοπό μας και τις υπηρεσίες μας</li>
                <li>Να συμμορφωθούμε με τις νομικές υποχρεώσεις μας</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">4. Ασφάλεια δεδομένων</h2>
              <p>
                Έχουμε θέσει σε εφαρμογή κατάλληλα μέτρα ασφαλείας για να αποτρέψουμε την τυχαία απώλεια, 
                χρήση ή πρόσβαση των προσωπικών σας δεδομένων με μη εξουσιοδοτημένο τρόπο.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">5. Τα δικαιώματά σας</h2>
              <p className="mb-3">Σύμφωνα με τον GDPR, έχετε το δικαίωμα:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Πρόσβασης στα προσωπικά σας δεδομένα</li>
                <li>Διόρθωσης ανακριβών δεδομένων</li>
                <li>Διαγραφής των δεδομένων σας</li>
                <li>Περιορισμού της επεξεργασίας</li>
                <li>Φορητότητας δεδομένων</li>
                <li>Εναντίωσης στην επεξεργασία</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">6. Επικοινωνία</h2>
              <p>
                Για οποιεσδήποτε ερωτήσεις σχετικά με αυτήν την πολιτική απορρήτου ή τις πρακτικές των δεδομένων μας, 
                επικοινωνήστε μαζί μας στο: info@lmanakainisi.gr
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
