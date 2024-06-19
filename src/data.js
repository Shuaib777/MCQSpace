const data = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which planet is known as the Earth's twin?",
    options: ["Mars", "Venus", "Mercury", "Neptune"],
    answer: "Venus",
  },
  {
    question: "What is the name of the galaxy that contains our Solar System?",
    options: [
      "Andromeda Galaxy",
      "Whirlpool Galaxy",
      "Milky Way Galaxy",
      "Sombrero Galaxy",
    ],
    answer: "Milky Way Galaxy",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "What is the name of the first artificial Earth satellite?",
    options: ["Voyager", "Sputnik 1", "Apollo 11", "Hubble"],
    answer: "Sputnik 1",
  },
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Venus",
  },
  {
    question: "What is the main component of the Sun?",
    options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
    answer: "Hydrogen",
  },
  {
    question: "Which dwarf planet is located in the asteroid belt?",
    options: ["Pluto", "Eris", "Haumea", "Ceres"],
    answer: "Ceres",
  },
  {
    question: "Which planet is known for its prominent ring system?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    answer: "Saturn",
  },
  {
    question: "What is the name of the first man to travel into space?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    answer: "Yuri Gagarin",
  },
  {
    question: "What is the closest star to Earth?",
    options: ["Alpha Centauri", "Proxima Centauri", "Sirius", "Betelgeuse"],
    answer: "Proxima Centauri",
  },
  {
    question:
      "What is the term for a star that suddenly increases greatly in brightness due to a catastrophic explosion?",
    options: ["Nova", "Supernova", "Hypernova", "Red Giant"],
    answer: "Supernova",
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Mars", "Venus", "Mercury", "Saturn"],
    answer: "Venus",
  },
  {
    question: "What force keeps the planets in orbit around the Sun?",
    options: ["Magnetism", "Nuclear Force", "Gravity", "Electric Force"],
    answer: "Gravity",
  },
  {
    question: "Which space probe was the first to successfully fly by Pluto?",
    options: ["Voyager 1", "Voyager 2", "New Horizons", "Pioneer 10"],
    answer: "New Horizons",
  },
  {
    question: "What is the name of the largest moon of Saturn?",
    options: ["Europa", "Ganymede", "Titan", "Callisto"],
    answer: "Titan",
  },
  {
    question:
      "What is the term for a rocky object that orbits the Sun and is too small to be considered a planet?",
    options: ["Meteor", "Comet", "Asteroid", "Planetoid"],
    answer: "Asteroid",
  },
  {
    question: "Which planet is known for having the Great Red Spot?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which planet has a day that is longer than its year?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Venus",
  },
  {
    question: "What is the name of the first rover to land on Mars?",
    options: ["Curiosity", "Spirit", "Opportunity", "Sojourner"],
    answer: "Sojourner",
  },
  {
    question:
      "What is the name of the phenomenon where the Sun is directly above the equator, resulting in equal day and night?",
    options: ["Solstice", "Eclipse", "Equinox", "Perihelion"],
    answer: "Equinox",
  },
  {
    question: "What is the most abundant element in the universe?",
    options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
    answer: "Hydrogen",
  },
  {
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Uranus",
  },
  {
    question:
      "What is the name of the largest volcano in the solar system, located on Mars?",
    options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Mount Etna"],
    answer: "Olympus Mons",
  },
  {
    question: "Which mission was the first to land humans on the Moon?",
    options: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 15"],
    answer: "Apollo 11",
  },
  {
    question:
      "What is the term for the path a celestial body follows as it moves around another body?",
    options: ["Axis", "Orbit", "Trajectory", "Perihelion"],
    answer: "Orbit",
  },
  {
    question:
      "What is the name of the second largest moon in the solar system, orbiting Jupiter?",
    options: ["Io", "Europa", "Ganymede", "Callisto"],
    answer: "Callisto",
  },
  {
    question: "What type of galaxy is the Milky Way?",
    options: ["Elliptical", "Irregular", "Spiral", "Barred Spiral"],
    answer: "Barred Spiral",
  },
  {
    question: "Which spacecraft was the first to land on an asteroid?",
    options: ["NEAR Shoemaker", "Dawn", "Hayabusa", "Rosetta"],
    answer: "NEAR Shoemaker",
  },
  {
    question:
      "What is the term for the point in an orbit that is closest to the Sun?",
    options: ["Apogee", "Perigee", "Aphelion", "Perihelion"],
    answer: "Perihelion",
  },
  {
    question:
      "Which planet is known for its extreme tilt, causing it to spin on its side?",
    options: ["Earth", "Mars", "Uranus", "Neptune"],
    answer: "Uranus",
  },
  {
    question:
      "What is the name of the telescope that has provided detailed images of distant galaxies since 1990?",
    options: [
      "Spitzer Space Telescope",
      "Chandra X-ray Observatory",
      "Hubble Space Telescope",
      "James Webb Space Telescope",
    ],
    answer: "Hubble Space Telescope",
  },
  {
    question:
      "Which planet is known for having a thick atmosphere primarily composed of carbon dioxide?",
    options: ["Earth", "Mars", "Venus", "Neptune"],
    answer: "Venus",
  },
  {
    question:
      "What is the term for the dark, flat regions on the Moon's surface?",
    options: ["Craters", "Maria", "Rilles", "Highlands"],
    answer: "Maria",
  },
  {
    question:
      "What is the name of the spacecraft that took the famous 'Pale Blue Dot' photograph of Earth?",
    options: ["Voyager 1", "Voyager 2", "Cassini", "New Horizons"],
    answer: "Voyager 1",
  },
  {
    question: "Which planet has the largest volcano in the solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question:
      "What is the name of the star system closest to the Solar System?",
    options: ["Sirius", "Alpha Centauri", "Betelgeuse", "Vega"],
    answer: "Alpha Centauri",
  },
  {
    question:
      "What is the name of the first American astronaut to orbit the Earth?",
    options: ["Neil Armstrong", "John Glenn", "Buzz Aldrin", "Alan Shepard"],
    answer: "John Glenn",
  },
  {
    question:
      "Which planet is known as the 'Windy Planet' due to its high-speed winds?",
    options: ["Venus", "Neptune", "Jupiter", "Saturn"],
    answer: "Neptune",
  },
  {
    question:
      "What is the name of the boundary around a black hole beyond which nothing can escape?",
    options: [
      "Event Horizon",
      "Singularity",
      "Schwarzschild Radius",
      "Photon Sphere",
    ],
    answer: "Event Horizon",
  },
  {
    question:
      "Which spacecraft is known for its detailed study of Saturn and its rings?",
    options: ["Voyager 1", "Voyager 2", "Cassini", "New Horizons"],
    answer: "Cassini",
  },
  {
    question:
      "What is the term for a system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity?",
    options: ["Solar System", "Nebula", "Galaxy", "Cluster"],
    answer: "Galaxy",
  },
  {
    question: "Which planet is the smallest in the solar system?",
    options: ["Mercury", "Venus", "Mars", "Pluto"],
    answer: "Mercury",
  },
  {
    question: "Which planet has the shortest day in the solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question:
      "What is the term for the stream of charged particles released from the upper atmosphere of the Sun?",
    options: ["Solar Wind", "Solar Flare", "Coronal Mass Ejection", "Aurora"],
    answer: "Solar Wind",
  },
  {
    question:
      "What is the name of the NASA mission that aims to return samples from an asteroid?",
    options: ["OSIRIS-REx", "Hayabusa", "Rosetta", "Dawn"],
    answer: "OSIRIS-REx",
  },
  {
    question:
      "Which planet is known for its Great Dark Spot, similar to Jupiter's Great Red Spot?",
    options: ["Mars", "Uranus", "Neptune", "Saturn"],
    answer: "Neptune",
  },
  {
    question: "What is the name of the closest galaxy to the Milky Way?",
    options: ["Andromeda", "Triangulum", "Whirlpool", "Magellanic Clouds"],
    answer: "Andromeda",
  },
  {
    question:
      "Which planet is known for its large polar ice caps made of dry ice?",
    options: ["Mars", "Venus", "Earth", "Neptune"],
    answer: "Mars",
  },
  {
    question:
      "What is the term for the collapse of a massive star's core, leading to a supernova?",
    options: ["Black Hole", "Neutron Star", "Pulsar", "Singularity"],
    answer: "Neutron Star",
  },
  {
    question:
      "What is the name of the European Space Agency's spacecraft that landed on a comet?",
    options: ["Rosetta", "Galileo", "Juno", "Cassini"],
    answer: "Rosetta",
  },
  {
    question: "Which planet's moon is the largest in the solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Jupiter",
  },
  {
    question:
      "What is the name of the most distant man-made object from Earth?",
    options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"],
    answer: "Voyager 1",
  },
  {
    question: "Which planet has a moon named Triton?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Neptune",
  },
  {
    question:
      "What is the name of the space telescope that succeeded the Hubble Space Telescope?",
    options: ["Spitzer", "James Webb", "Kepler", "Chandra"],
    answer: "James Webb",
  },
  {
    question: "Which planet is known for its tilted axis of rotation?",
    options: ["Earth", "Mars", "Uranus", "Neptune"],
    answer: "Uranus",
  },
  {
    question:
      "What is the name of the mission that landed the first humans on the Moon?",
    options: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 15"],
    answer: "Apollo 11",
  },
  {
    question: "Which planet has a moon named Europa?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Jupiter",
  },
  {
    question: "What is the name of the closest exoplanet to Earth?",
    options: ["Proxima Centauri b", "Kepler-22b", "Gliese 581g", "HD 209458 b"],
    answer: "Proxima Centauri b",
  },
  {
    question:
      "What is the name of the first spacecraft to reach interstellar space?",
    options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"],
    answer: "Voyager 1",
  },
  {
    question: "Which planet is known as the 'Evening Star'?",
    options: ["Mars", "Venus", "Mercury", "Saturn"],
    answer: "Venus",
  },
  {
    question:
      "What is the term for the outermost layer of the Sun's atmosphere?",
    options: ["Chromosphere", "Photosphere", "Corona", "Convective Zone"],
    answer: "Corona",
  },
  {
    question: "Which planet has a moon named Titan?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Saturn",
  },
  {
    question:
      "What is the name of the NASA mission that successfully landed a rover on Mars in 2021?",
    options: ["Curiosity", "Spirit", "Opportunity", "Perseverance"],
    answer: "Perseverance",
  },
  {
    question: "Which planet has the highest mountain in the solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question:
      "What is the term for a small body that travels through space and is visible from Earth when it enters the atmosphere?",
    options: ["Asteroid", "Comet", "Meteor", "Planetoid"],
    answer: "Meteor",
  },
  {
    question:
      "What is the name of the first privately funded spacecraft to reach orbit?",
    options: ["Dragon", "Falcon 9", "New Shepard", "SpaceShipOne"],
    answer: "SpaceShipOne",
  },
  {
    question: "Which planet has the most extreme seasons in the solar system?",
    options: ["Mars", "Venus", "Uranus", "Neptune"],
    answer: "Uranus",
  },
  {
    question:
      "What is the name of the effect that causes the apparent bending of light around massive objects like stars?",
    options: [
      "Redshift",
      "Blueshift",
      "Gravitational Lensing",
      "Doppler Effect",
    ],
    answer: "Gravitational Lensing",
  },
  {
    question:
      "Which planet has a surface temperature that can reach up to 464 degrees Celsius (867 degrees Fahrenheit)?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Venus",
  },
  {
    question:
      "What is the term for the region around a black hole where the escape velocity exceeds the speed of light?",
    options: [
      "Event Horizon",
      "Singularity",
      "Schwarzschild Radius",
      "Photon Sphere",
    ],
    answer: "Event Horizon",
  },
  {
    question: "Which planet has the longest orbit around the Sun?",
    options: ["Jupiter", "Neptune", "Pluto", "Mercury"],
    answer: "Neptune",
  },
  {
    question: "What is the name of the first woman to travel into space?",
    options: [
      "Sally Ride",
      "Valentina Tereshkova",
      "Mae Jemison",
      "Eileen Collins",
    ],
    answer: "Valentina Tereshkova",
  },
  {
    question:
      "Which planet has a Great Red Spot, a giant storm larger than Earth?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  {
    question:
      "What is the term for a star that has exhausted most of its nuclear fuel and has collapsed to a very small size?",
    options: ["Red Giant", "White Dwarf", "Neutron Star", "Black Hole"],
    answer: "White Dwarf",
  },
  {
    question: "Which planet has a day length closest to that of Earth?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question:
      "What is the term for the apparent backward motion of a planet as seen from Earth?",
    options: [
      "Retrograde Motion",
      "Prograde Motion",
      "Sidereal Motion",
      "Diurnal Motion",
    ],
    answer: "Retrograde Motion",
  },
  {
    question:
      "What is the name of the spacecraft that carried the first humans to the Moon?",
    options: ["Gemini", "Apollo", "Mercury", "Skylab"],
    answer: "Apollo",
  },
  {
    question:
      "Which planet has a surface gravity that is closest to that of Earth?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Venus",
  },
  {
    question:
      "What is the name of the bright 'star' often seen near the Moon in the early evening?",
    options: ["Sirius", "Mars", "Jupiter", "Venus"],
    answer: "Venus",
  },
];

export default data;
