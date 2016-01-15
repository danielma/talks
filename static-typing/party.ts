class Party {
  get attendees(): string[] {
    return [] // I don't throw good parties by default
  }
}

class RowdyParty extends Party {}

class BirthdayParty {
  get attendees() {
    return ['family', 'close friends']
  }
}

function pickParty(context: string): Party {
  switch(context) {
    case 'parents are gone for the weekend':
      return new RowdyParty()
    case 'birthday':
      return new BirthdayParty()
    default:
      return new Party()
  }
}

const x = pickParty('birthday')

x.attendees.map((value) => value.charAt(1))
