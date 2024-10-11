class Calendar:
    def __init__(self):
        self.events = []

    def add_event(self, date, recipe):
        self.events.append((date, recipe))