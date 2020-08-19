//Contains AZops blocks

var colorAzops = 70;
var colorMots = 190;

Blockly.Blocks['container'] = {
  init: function() {

    this.appendStatementInput('Container')
      .appendField('container');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
    //this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['each-of'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('each-of');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Permet de regrouper plusieurs mots');

    this.setOnChange(function(event) {
      console.log("event type: " + event.type + " childcount: " + this.childBlocks_.length);
      if (Blockly.Events.UI === event.type) {
        if (this.childBlocks_.length - childCount > 0) {
          this.appendStatementInput('VALUE' + (childCount + 1));
        }
        else if (this.childBlocks_.length - childCount < 0) {
          this.removeInput('VALUE' + (childCount));
        }
      }
      childCount = this.childBlocks_.length;
    });
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};
Blockly.Blocks['info-about'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('topic');
    this.appendDummyInput('soleil')
      .appendField(new Blockly.FieldImage("../media/azops_images/egal.png", 10, 10, "*"))
    this.appendStatementInput('VALUE1')
      .appendField('info');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['add-side-info'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('topic');
    this.appendDummyInput('soleil')
      .appendField(new Blockly.FieldImage("../media/azops_images/egal.png", 10, 10, "*"))
    this.appendStatementInput('VALUE1')
      .appendField('info');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['nicht-sondern'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('nicht');
    this.appendStatementInput('VALUE1')
      .appendField('sondern');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['soleil'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('soleil')
      .appendField(new Blockly.FieldImage("../media/words/soleil.png", 30, 30, "*"))
    //this.setPreviousStatement(true, 'Field');
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
      .appendField(new Blockly.FieldImage("../media/words/nuage.png", 30, 30, "*"))
    //this.setPreviousStatement(true, 'Field');
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
      .appendField(new Blockly.FieldImage("../media/words/pluie.png", 30, 30, "*"))
    //this.setPreviousStatement(true, 'Field');
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
      .appendField(new Blockly.FieldImage("../media/words/eclair.png", 30, 30, "*"))
    //this.setPreviousStatement(true, 'Field');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('This is a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['draw'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('draw')
      .appendField(new Blockly.FieldImage("../media/words/eclair.png", 30, 30, "*"))
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
