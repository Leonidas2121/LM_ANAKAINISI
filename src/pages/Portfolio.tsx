import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Ολική Ανακαίνιση Διαμερίσματος",
      category: "full",
      location: "Κολωνάκι, Αθήνα",
      image: portfolio1,
      description: "Πλήρης μετατροπή διαμερίσματος 120τμ με έμφαση στο μοντέρνο design",
    },
    {
      id: 2,
      title: "Ανακαίνιση Μπάνιου",
      category: "bathroom",
      location: "Γλυφάδα, Αττική",
      image: portfolio2,
      description: "Μοντέρνο μπάνιο με μαρμάρινα πλακάκια και ambient φωτισμό",
    },
    {
      id: 3,
      title: "Ανακαίνιση Κουζίνας",
      category: "kitchen",
      location: "Χαλάνδρι, Αθήνα",
      image: portfolio3,
      description: "Σύγχρονη κουζίνα με custom ντουλάπια και quartz πάγκους",
    },
    {
      id: 4,
      title: "Ανακαίνιση Σαλονιού",
      category: "living",
      location: "Νέα Σμύρνη, Αθήνα",
      image: portfolio4,
      description: "Ευρύχωρο σαλόνι με σύγχρονα φινιρίσματα και φυσικό φως",
    },
  ];

  const categories = [
    { id: "all", label: "Όλα" },
    { id: "full", label: "Ολική Ανακαίνιση" },
    { id: "kitchen", label: "Κουζίνα" },
    { id: "bathroom", label: "Μπάνιο" },
    { id: "living", label: "Σαλόνι" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Τα Έργα μας
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ανακαλύψτε την ποιότητα και την προσοχή στη λεπτομέρεια
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={filter === category.id ? "bg-accent hover:bg-accent/90 text-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-inter text-sm mb-1">{project.location}</p>
                    <h3 className="font-playfair text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="font-inter text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="font-inter text-lg text-muted-foreground">
                Δεν υπάρχουν έργα σε αυτήν την κατηγορία.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
