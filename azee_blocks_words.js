//Contains Words blocks

var colorMots = 190;

//MOTS
Blockly.Blocks['textAzee'] = {
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
};

Blockly.Blocks['sigma'] = {
  init: function() {
    this.appendDummyInput('sigma')
      .appendField(new Blockly.FieldImage("../media/words/sigma.png", 20, 20, "*"))
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('je');
  },
};

Blockly.Blocks['soleil'] = {
  init: function() {
    this.appendDummyInput('soleil')
      .appendField('\u{2600}️');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('soleil');
  },
};

Blockly.Blocks['nuage'] = {
  init: function() {
    this.appendDummyInput('nuage')
      .appendField('\u{2601}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('nuage');
  },
};

Blockly.Blocks['pluie'] = {
  init: function() {
    this.appendDummyInput('pluie')
      .appendField('\u{1F327}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('pluie');
  },
};

Blockly.Blocks['eclair'] = {
  init: function() {
    this.appendDummyInput('eclair')
      .appendField('\u{1F329}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('eclair');
  },
};

Blockly.Blocks['chien'] = {
  init: function() {
    this.appendDummyInput('chien')
      .appendField('\u{1F415}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('chien');
  },
};

Blockly.Blocks['gentil'] = {
  init: function() {
    this.appendDummyInput('gentil')
      .appendField('\u{1F493}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('gentil');
  },
};

Blockly.Blocks['renard'] = {
  init: function() {
    this.appendDummyInput('renard')
      .appendField('\u{1F98A}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('renard');
  },
};

Blockly.Blocks['rapide'] = {
  init: function() {
    this.appendDummyInput('rapide')
      .appendField('\u{26A1}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('rapide');
  },
};

Blockly.Blocks['brun'] = {
  init: function() {
    this.appendDummyInput('brun')
      .appendField('\u{1F7E4}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('brun');
  },
};

Blockly.Blocks['paresseux'] = {
  init: function() {
    this.appendDummyInput('paresseux')
      .appendField('\u{1F634}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('paresseux');
  },
};

Blockly.Blocks['vieil homme'] = {
  init: function() {
    this.appendDummyInput('vieil homme')
      .appendField('\u{1F474}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('vieil homme');
  },
};

Blockly.Blocks['vieille femme'] = {
  init: function() {
    this.appendDummyInput('vieille femme')
      .appendField('\u{1F475}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('vieille femme');
  },
};

Blockly.Blocks['homme'] = {
  init: function() {
    this.appendDummyInput('homme')
      .appendField('\u{1F468}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('homme');
  },
};

Blockly.Blocks['femme'] = {
  init: function() {
    this.appendDummyInput('femme')
      .appendField('\u{1F469}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('femme');
  },
};

Blockly.Blocks['famille'] = {
  init: function() {
    this.appendDummyInput('famille')
      .appendField('\u{1F46A}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('famille');
  },
};

Blockly.Blocks['rouge'] = {
  init: function() {
    this.appendDummyInput('rouge')
      .appendField('\u{1F534}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('rouge');
  },
};

Blockly.Blocks['bleu'] = {
  init: function() {
    this.appendDummyInput('bleu')
      .appendField('\u{1F535}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('bleu');
  },
};

Blockly.Blocks['vert'] = {
  init: function() {
    this.appendDummyInput('vert')
      .appendField('\u{1F7E2}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('vert');
  },
};

Blockly.Blocks['noir'] = {
  init: function() {
    this.appendDummyInput('noir')
      .appendField('\u{26AB}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('noir');
  },
};

Blockly.Blocks['chauve-souris'] = {
  init: function() {
    this.appendDummyInput('chauve-souris')
      .appendField('\u{1F987}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('chauve-souris');
  },
};

Blockly.Blocks['chat'] = {
  init: function() {
    this.appendDummyInput('chat')
      .appendField('\u{1F408}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('chat');
  },
};

Blockly.Blocks['grenouille'] = {
  init: function() {
    this.appendDummyInput('grenouille')
      .appendField('\u{1F438}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('grenouille');
  },
};

Blockly.Blocks['méchant'] = {
  init: function() {
    this.appendDummyInput('méchant')
      .appendField('\u{1F608}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('méchant');
  },
};

Blockly.Blocks['magicien'] = {
  init: function() {
    this.appendDummyInput('magicien')
      .appendField('\u{1F9D9}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('magicien');
  },
};

Blockly.Blocks['monstre'] = {
  init: function() {
    this.appendDummyInput('monstre')
      .appendField('\u{1F47E}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('monstre');
  },
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput('stop')
      .appendField('\u{26D4}');
    this.setPreviousStatement(true);
    this.setNextStatement(false, 'Field');
    this.setColour(colorMots);
    this.setTooltip('stop');
  },
};
