//Contains AZops blocks

var colorMots = 190;

//MOTS
Blockly.Blocks['textAzee'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('mot')
      .appendField("mot")
      .appendField(new Blockly.FieldTextInput('\'\''),
        'FIELDNAME');

    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
    this.setTooltip('This is a score');
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
