/* eslint-disable */

export const TEMPGAMES = [
  {
    key: "spyfall",
    name: "spyfall",
    description: "The name of the game",
    rules: 'These are the rules',
    roles: [
      {
        id: 1,
        roleName: "Spy",
        team: "Spy"
      },
      {
        id: 2,
        roleName: "Non-Spy",
        team: "Non-Spy"
      }
    ],
    locations: [
      "airplane", "amusement park", "bank", "beach",
      "circus tent", "corporate party", "crusader party",
      "day spa", "hotel", "military base", "movie studio",
      "hotel", "military base", "movie studio", "nightclub",
      "pirate ship", "polar station", "police station", "restaurant",
      "space station", "submarine", "supermarket", "theater"
    ]
  },
  {
    key: "seawitched",
    name: "seawitched",
    description: "The name of the game",
    rules: 'These are the rules',
    roles: [
      {
        id: 1,
        key: "lookout",
        roleName: "The Lookout",
        team: "Pirates",
        description: "The lookout's goal is to find out who the captain is, and avoid being called out by the seawitch.",
        strategy: "Use the other guards to blend in to avoid detection. In most games, when there is one or two 'captians', you have a 50/50 chance of guessing correctly. Use your skills of deduction to sway that figure in your favor... ",
        canStop: true,
        canCall: [
          {
            id: 2,
            key: "theCaptain"
          },
          {
            id: 4,
            key: "theMutineer"
          }
        ]
      },
      {
        id: 2,
        key: "captain",
        roleName: "The Captian",
        team: "Pirates",
        description: "The Captains goal is to convice the lookout that they are the Captain and not the evil seawitch, or help the guards figure out who the mutineer is",
        strategy: "You need to get the Lookout to trust you and choose you as the true Captain, since its a 50/50 chance for them. You can also work with the guards to figure out who the mutineer is",
        canStop: true,
        canCall: [
          {
            id: 4,
            key: "theMutineer"
        }]
      },
      {
        id: 3,
        key: "seawitch",
        roleName: "The Seawitch",
        team: "Occult",
        description: "The Seawitchs goal is to convice the lookout that they are the Captain and not the evil seawitch, or help the guards figure out who the mutineer is",
        strategy: "You need to get the Lookout to trust you and choose you as the true Captain, since its a 50/50 chance for them. You can also work with the guards to figure out who the mutineer is",
        canStop: true,
        canCall: [
          {
            id: 1,
            key: "theLookout"
        }]
      },
      {
        id: 2,
        key: "mutineer",
        roleName: "The Mutineer",
        team: "Occult",
        description: "The Mutineers goal is to convice the lookout that they are the Captain and not the evil seawitch, or help the guards figure out who the mutineer is",
        strategy: "You need to get the Lookout to trust you and choose you as the true Captain, since its a 50/50 chance for them. You can also work with the guards to figure out who the mutineer is",
        canStop: false,
        canCall: [
          {
            id: 0,
            key: "No One"
          }
        ]
      },
      {
        id: 2,
        key: "first-mate",
        roleName: "Mate",
        team: "Pirates",
        description: "The first-mates goal is to convice the lookout that they are the Captain and not the evil seawitch, or help the guards figure out who the mutineer is",
        strategy: "You need to get the Lookout to trust you and choose you as the true Captain, since its a 50/50 chance for them. You can also work with the guards to figure out who the mutineer is",
        canStop: true,
        canCall: [
          {
            id: 4,
            key: "theMutineer"
        }]
      },
    ]
  }
]
