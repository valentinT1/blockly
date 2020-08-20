//Contains Verbs blocks

var colorVerbes = 130;

//VERBES

Blockly.Blocks['dormir'] = {
  init: function() {
    this.appendDummyInput('dormir')
      .appendField('\u{1F6CC}️');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorVerbes);
    this.setTooltip('dormir');
  },
};

Blockly.Blocks['crier'] = {
  init: function() {
    this.appendDummyInput('crier')
      .appendField('\u{1F631}️');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorVerbes);
    this.setTooltip('crier');
  },
};

Blockly.Blocks['parler'] = {
  init: function() {
    this.appendDummyInput('parler')
      .appendField('\u{1F5E3}️');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorVerbes);
    this.setTooltip('parler');
  },
};

