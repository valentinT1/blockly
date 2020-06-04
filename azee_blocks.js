//Contains AZops blocks

Blockly.Blocks['each-of'] = {
  init: function() {
    var childCount = 0;

    this.appendValueInput('VALUE0')
      .appendField('each of');
    this.setOutput(true, 'LIST-of-scores');
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');

    this.setOnChange(function(event) {
      console.log("event type: " + event.type + " childcount: " + this.childBlocks_.length);
      if (Blockly.Events.UI === event.type) {
        if (this.childBlocks_.length - childCount > 0) {
          this.appendValueInput('VALUE' + (childCount + 1));
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

Blockly.Blocks['nicht-sondern'] = {
  init: function() {

    this.appendValueInput('VALUE0')
      .appendField('nicht');
    this.appendValueInput('VALUE1')
      .appendField('sondern');
    this.setOutput(true, 'score');
    this.setColour(160);
    this.setTooltip('Returns a score');
    //this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['soleil'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('sun')
      .appendField(new Blockly.FieldImage("../media/words/soleil.png", 30, 30, "*"))
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

Blockly.Blocks['cloud'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('sun')
      .appendField(new Blockly.FieldImage("../media/words/cloud.png", 30, 30, "*"))
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

Blockly.Blocks['rain'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('sun')
      .appendField(new Blockly.FieldImage("../media/words/rain.png", 30, 30, "*"))
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

Blockly.Blocks['thunder'] = {
  // Numeric input.
  init: function() {
    this.appendDummyInput('sun')
      .appendField(new Blockly.FieldImage("../media/words/thunder.png", 30, 30, "*"))
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