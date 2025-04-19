Restarted in a MealPlanner repo

# Conceptual understanding through the project:


## Architecture and Separation of Concerns:
    1. Presentation Layer - responsible for rendering data to users and capturing user input through the visual interface
    2. Application Layer - responsible for core processes, workflows and determines how data is created, validated, and transformed according to business use cases and rules
    3. Data Access Layer - responsible for data fetching and storage
    4. Infrastructure Layer - responsible for providing access to external systems, frameworks and hardware


🍕 Pizza shop as an Eg:
presentation layer is the shop window and counter where customers place their orders and watch the pizzas being boxed.

application layer is the head chef who reads each pizza order, follows the recipe, and tells the kitchen staff what to do (e.g., “add cheese,” “bake at 220°C for 10 minutes”).

data access layer is the pantry and fridge where all ingredients live (cheese, dough, toppings). When the chef needs something, they send someone to fetch it.

infrastructure layer is the building itself (walls, power, water, ovens)
                        In Code:
                        UI → Order counter

                        Business Logic → Recipe and cooking

                        Data Access → Fetching inventory

                        Database → Storage for ingredients/recipes

# Separation of Concerns has 2 Processes - Increasing Cohesion and Reducing Coupling
In Code:
  Coupling - How tightly modules rely on each other
        High coupling = Classes or modules are tangled and cant work alone.
        Low coupling = Modules talk through clean, minimal interfaces.
  Cohesion - How focused a module is on one specific task
        High cohesion = A module/class does one job well and all parts work toward the same purpose.
        Low cohesion = It has mixed responsibilities that don’t belong together.

🍕 Analogy:
  If the cashier has to constantly enter the kitchen to tell the chef what to do or ask where the cheese is stored → That's high coupling. One part can't function without digging into another part's business.
  If the kitchen is responsible for making pizza, pasta, answering phone calls, and managing accounts… → That is low cohesion. It is doing too many unrelated things.


  High Cohesion - If the cashier simply sends the order to the kitchen, and the kitchen does its thing
  Low Coupling - If the kitchen only cooks, and the front desk only handles orders… → That is high cohesion. Each part has a focused responsibility
