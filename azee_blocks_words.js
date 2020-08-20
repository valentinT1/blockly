//Contains Words blocks

var colorMots = 190;

//MOTS
Blockly.Blocks['textAzee'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('mot')
      .appendField("")
      .appendField(new Blockly.FieldTextInput(''),
        'FIELDNAME');

    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('mot perso');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['sigma'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('sigma')
      .appendField(new Blockly.FieldImage("../media/words/sigma.png", 20, 20, "*"))
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('je');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['soleil'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('soleil')
      .appendField('\u{2600}️');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('soleil');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['nuage'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('nuage')
      .appendField('\u{2601}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('nuage');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['pluie'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('pluie')
      .appendField('\u{1F327}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('pluie');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['eclair'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('eclair')
      .appendField('\u{1F329}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('eclair');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['chien'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('chien')
      .appendField('\u{1F415}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('chien');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['gentil'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('gentil')
      .appendField('\u{1F493}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('gentil');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['renard'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('renard')
      .appendField('\u{1F98A}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('renard');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['rapide'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('rapide')
      .appendField('\u{26A1}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('rapide');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['brun'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('brun')
      .appendField('\u{1F7E4}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('brun');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['paresseux'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('paresseux')
      .appendField('\u{1F634}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('paresseux');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['vieil homme'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('vieil homme')
      .appendField('\u{1F474}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('vieil homme');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['vieille femme'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('vieille femme')
      .appendField('\u{1F475}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('vieille femme');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['homme'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('homme')
      .appendField('\u{1F468}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('homme');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['femme'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('femme')
      .appendField('\u{1F469}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('femme');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['pere et fils'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('pere et fils')
      .appendField('\u{1F468}\u{1F466}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('pere et fils');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['combat'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('combat')
      .appendField('\u{2694}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('combat');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['rouge'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('rouge')
      .appendField('\u{1F534}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('rouge');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['bleu'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('bleu')
      .appendField('\u{1F535}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('bleu');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['vert'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('vert')
      .appendField('\u{1F7E2}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('vert');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['noir'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('noir')
      .appendField('\u{26AB}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('noir');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['chauve-souris'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('chauve-souris')
      .appendField('\u{1F987}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('chauve-souris');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['chat'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('chat')
      .appendField('\u{1F408}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('chat');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['grenouille'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('grenouille')
      .appendField('\u{1F438}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('grenouille');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['méchant'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('méchant')
      .appendField('\u{1F608}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('méchant');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

//this is not even close to work
Blockly.Blocks['draw'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('draw')
      .appendField('');
    //this.setPreviousStatement(true, 'Field');
    this.setOutput(true, 'score');
    this.setNextStatement(false, 'Field');
    this.setColour(160);
    this.setTooltip('This is a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};
