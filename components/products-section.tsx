const products = [
  {
    category: "Beef",
    items: ["Ribeye Steaks", "Filet Mignon", "Ground Beef", "Roasts", "Short Ribs", "Brisket"],
    description: "Premium cuts from trusted suppliers",
  },
  {
    category: "Pork",
    items: ["Pork Chops", "Bacon", "Ham", "Tenderloin", "Ribs", "Sausages"],
    description: "Farm-fresh pork selections",
  },
  {
    category: "Poultry",
    items: ["Whole Chickens", "Chicken Breasts", "Turkey", "Duck", "Wings", "Thighs"],
    description: "Free-range options available",
  },
  {
    category: "Specialty",
    items: ["Lamb Chops", "Veal", "Game Meats", "Deli Meats", "Marinated Cuts", "Custom Orders"],
    description: "Unique selections and custom cuts",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Our Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Quality Cuts for Every Occasion
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From everyday favorites to special occasion centerpieces, we have 
            the perfect cut for your table. Stop by or call ahead for custom orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.category}
              className="group p-6 rounded-sm bg-card border border-border transition-all hover:shadow-lg hover:border-primary/30"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.category}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-primary/5 rounded-sm border border-primary/20">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
            Custom Orders Welcome
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Need a special cut or bulk order for an event? We&apos;re happy to accommodate 
            custom requests. Just give us a call or stop by to discuss your needs.
          </p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Call to Order: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  )
}
