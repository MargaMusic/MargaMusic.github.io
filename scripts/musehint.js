//input
const radios = document.getElementById("radios");
const rootRadio = document.getElementById("rootRadio");
const rootButtons = document.querySelectorAll('input[name="root"]')
const scaleRadio = document.getElementById("scaleRadio");
const scaleButtons = document.querySelectorAll('input[name="scale"]')
//output
const notesText = document.getElementById("notesScale");
const chordsText = document.getElementById("chordsScale");
const descriptionText = document.getElementById("descriptionScale");


const notes = ["C", "D♭", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"];
const notesNatural = ["C", "D", "E", "F", "G", "A", "B"]

const scales = { 
    "ionian": [0, 2, 4, 5, 7, 9, 11],
    "dorian": [0, 2, 3, 5, 7, 9, 10],
    "phrygian": [0, 1, 3, 5, 7, 8, 10],
    "lydian": [0, 2, 4, 6, 7, 9, 11],
    "mixolydian": [0, 2, 4, 5, 7, 9, 10],
    "aeolian": [0, 2, 3, 5, 7, 8, 10],
    "locrian": [0, 1, 3, 5, 6, 8, 10],
    "harmonicminor": [0, 2, 3, 5, 7, 8, 11],
    "melodicminor": [0, 2, 3, 5, 7, 9, 11],
    // "doubleharmonic": [0, 1, 4, 5, 7, 8, 11]
};

const chords = {
    "ionian": ["", "m", "m", "", "", "m", "ø"],
    "dorian": ["m", "m", "", "", "m", "ø", ""],
    "phrygian": ["m", "", "", "m", "ø", "", "m"],
    "lydian": ["", "", "m", "ø", "", "m", "m"],
    "mixolydian": ["", "m", "ø", "", "m", "m", ""],
    "aeolian": ["m", "ø", "", "m", "m", "", ""],
    "locrian": ["ø", "", "m", "m", "", "", "m"],
    "harmonicminor": ["m", "ø", "+", "m", "", "", "°"],
    "melodicminor": ["m", "m", "+", "", "", "ø", "ø"],
    // "doubleharmonic": ["", "", "m", "m", "3M5d", "+", "3d5d"]
}

const descriptions = {
    "ionian": "Relative shape : I ii iii IV V vi viiø.\nThe major or ionian mode is the first mode of the diatonic scale.\nIt is described as happy, and can sometimes even be seen as cheesy.\nSome famous examples are : Cliff of Dover (Eric Johnson), Let It Be (Beatles).",
    "dorian": "Relative shape : i ii bIII IV v viø bVII.\nThe dorian mode is a minor mode with a major 6th, making it brighter than the natural minor mode.\nIt can be heard as soulful and has a melancholic but yet upbeat mood.\nSome famous examples are : Get Lucky (Daft Punk), Radioactive (Imagine Dragons), Karma Police (Radiohead), Great Gig in the Sky (Pink Floyd), Wicked Game (Chris Isaak), Boulevard of Broken Dreams (Green Day).",
    "phrygian": "Relative shape : i bII bIII iv vø bVI bvii.\nThe phrygian mode as the particularity of having a minor 2th, which is unusual to the ear and will be heard as oriental.\nFrom flamenco to the desert stereotype, it can be used to create uneasy feelings, and can sound mysterious.\nSome famous examples are : New Person (Tame Impala), Space Oddity (David Bowie).",
    "lydian": "Relative shape : I II iii #ivø V vi vii.\nThe lydian mode is the brightess mode of the diatonic scale. It is due to it's raised 4th.\nBut it doesn't make it the happiest scale, because it's brightness can be blinding.\nTo make the best at of the lydian scale, we have to accentuate it's 4th degree.\nSome famous examples are : The Simpsons (Opening Theme), A Thousand Miles (Vanessa Carlton).",
    "mixolydian": "Relative shape : I ii iiiø IV v vi bVII.\nThe mixolydian mode is pretty close to the major scale, but with a minor 7th, removing the tension of this leading tone. Because of this, the dominant chord is devoided of it's tension.\nIt is very common in Blues, where every chords is a major minor 7th chords.\nSome famous examples are : Clock (Coldplay), Bitter Sweet Symphony (The Verve), Sweet Child O' Mine (Guns 'n' Roses).",
    "aeolian": "Relative shape : i iiø bIII iv v bVI bVII.\nThe minor or aeolian mode is the second most famous mode of the diatonic scale.\nIn it's natural form, the minor scale doesn't have a strong resolution to it's tonic, because it's dominant chord is minor : v. To add more tension, the harmonic and the harmonic minor scales were invented.\nIt sounds pretty dark, espicially compared to the major scale.\nSome famous examples are : Back to Black (Amy Winehouse), Californication (Red Hot Chili Peppers).",
    "locrian": "Relative shape : iø bII biii iv bV bVI bvii.\nThe locrian mode is the only mode that has a flat 5th, making it really unstable.\nIt's really rarely used because of this lack of stability, but it can be used in metal for its sinister sound.\nSome famous examples are : Sad but True (Metallica), Dust to Dust (John Kirkpatrick).",
    "harmonicminor": "Relative shape : i iiø bIII+ iv V bVI vii°.\nThe harmonic minor mode is like the minor scale but with a major 7th, to add the tension of the major fifth.\nSome famous examples are : Plug In Baby (Muse), Smooth (Santana), Stolen Dance (Milky Chance), Gangsta's Paradise (Coolio).",
    "melodicminor": "Relative shape : i ii bIII+ IV V viø viiø.\nThe melodic minor mode is like the minor scale but with a major 6th and a major 7th, but only when going up the scale;\nWhen going down, it's similar to the minor scale.\nSome famous examples are : Yesturday (Beatles), Autumn Leaves (Joseph Kosma).",
    // "doubleharmonic": ""
};

const chordType = { 
    "": "Major",
    "m": "Minor",
    "ø": "Diminished",
    "+": "Augmented",
    "°": "Half-Diminished"
};


// //generates the buttons to select the root note
// function generateRootButtons()
// {
//     for (var i = 0; i < notes.length; i++)
//     {
//         var button = document.createElement("button");
//         button.setAttribute("onclick", "result(" + i + ", scaleSelected)");
//         button.innerText = notes[i][0];
//         rootButtons.appendChild(button);
//     }
// }

// //generates the buttons to select the scale
// function generateScaleButtons()
// {
//     for (var key in scales)
//     {
//         var button = document.createElement("button");
//         button.setAttribute("onclick", "result(rootSelected, '" + key + "')");
//         button.innerText = key;
//         scaleButtons.appendChild(button);
//     }
// }

function result(rootSelected, scaleSelected)
{
    if (rootSelected == -1) return null;

    notesText.innerText = null;
    chordsText.innerHTML = null;
    // descriptionText.innerHTML = null;
    notesResult = [];
    
    for (var i = 0; i < scales[scaleSelected].length; i++)
    {
        notesResult[i] = alterNote(notesNatural[(i + notesNatural.indexOf(notes[rootSelected][0])) % 7], (rootSelected + scales[scaleSelected][i]) % 12);
    }

    for (var i = 0; i < notesResult.length; i++)
    {
        notesText.innerText += " " + notesResult[i];
        chordsText.innerText += " " + notesResult[i] + chords[scaleSelected][i];
    }
    // descriptionText.innerText = descriptions[scaleSelected];
}

//alters a note according to the scale
function alterNote(noteNatural, scaleValue)
{
    naturalValue = notes.indexOf(noteNatural);
    switch (scaleValue - naturalValue)
    {
        case -2:
        case 10:
            noteAltered = noteNatural + "𝄫"; //double flat
            break;
        case -1:
        case 11:
            noteAltered = noteNatural + "♭"; //flat
            break;
        case 1:
        case -11:
            noteAltered = noteNatural + "♯"; //sharp
            break;
        case 2:
        case -10:
            noteAltered = noteNatural + "𝄪"; //double sharp
            break;
        default:
            noteAltered = noteNatural; //natural
            break;
    }
    return noteAltered;
}

//calculates a chord from a note and a chord type
function chord(note, chordType)
{
    var chord = [];
    var noteIndex = notes.indexOf(note);
    var chordTypeIndex = chords.indexOf(chordType);
    for (var i = 0; i < 3; i++)
    {
        chord[i] = notes[(noteIndex + chordTypeIndex + i) % 12];
    }
    return chord;
}

//initialisation
//generateRootButtons();
//generateScaleButtons();
result(0, "ionian");

//event listener for the buttons
radios.addEventListener("change", function()
{
    rootSelected = null;
    scaleSelected = null;
    for (const rootButton of rootButtons)
    {
        if (rootButton.checked)
        {
            rootSelected = parseInt(rootButton.value);
        }
    }
    for (const scaleButton of scaleButtons)
    {
        if (scaleButton.checked)
        {
            scaleSelected = scaleButton.value;
        }
    }
    result(rootSelected, scaleSelected)
});