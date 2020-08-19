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

//AZOPS
Blockly.Blocks['info-about'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('topic');
    this.appendDummyInput('egal')
      .appendField(new Blockly.FieldImage("../media/azops_images/egal.png", 20, 20, "*"))
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
    this.appendStatementInput('VALUE1')
      .appendField('(info)');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['category'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('category');
    this.appendDummyInput('down_arrow')
      .appendField(new Blockly.FieldImage("../media/azops_images/down_arrow.png", 20, 20, "*"))
    this.appendStatementInput('VALUE1')
      .appendField('focus');
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

Blockly.Blocks['context-ssp'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('context');
    this.appendDummyInput('slash')
      .appendField(new Blockly.FieldImage("../media/azops_images/slash.png", 20, 20, "*"))
    this.appendStatementInput('VALUE1')
      .appendField('événement');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['seq-res'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('condition');
    this.appendDummyInput('right arrow')
      .appendField(new Blockly.FieldImage("../media/azops_images/right_arrow.png", 20, 20, "*"))
    this.appendStatementInput('VALUE1')
      .appendField('résultat');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
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

Blockly.Blocks['all-of'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('all-of');
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

Blockly.Blocks['mutex-list'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('mutex-list');
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

Blockly.Blocks['open-list-non-mutex'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('open-list-non-mutex');
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

Blockly.Blocks['time-seq'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('time-seq');
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

Blockly.Blocks['inter-subjectivity'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('vrai');
    this.appendDummyInput('right arrow')
      .appendField(new Blockly.FieldImage("../media/azops_images/check.png", 20, 20, "*"))
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['cam-switch'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('cam-switch');
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

Blockly.Blocks['sign-supported-spoken'] = {
  init: function() {
    var childCount = 0;

    this.appendStatementInput('VALUE0')
      .appendField('position');
      this.appendStatementInput('VALUE1')
      .appendField('looking at');
    this.appendStatementInput('VALUE3')
      .appendField('sig');
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

Blockly.Blocks['intensity'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField(new Blockly.FieldImage("../media/azops_images/plus.png", 20, 20, "*"));
    this.appendDummyInput('')
      .appendField('intensity');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['turn-taking'] = {
  init: function() {

    this.appendDummyInput('')
      .appendField(new Blockly.FieldImage("../media/azops_images/left_par.png", 70, 20, "*"));
    this.appendStatementInput('VALUE0')
      .appendField('turn-taking');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['simultaneous'] = {
  init: function() {

    this.appendStatementInput('VALUE0')
      .appendField('sig1');
    this.appendDummyInput('')
      .appendField(new Blockly.FieldImage("../media/azops_images/double_slash.png", 70, 20, "*"));
    this.appendStatementInput('VALUE1')
      .appendField('sig2');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour(colorAzops);
    this.setTooltip('Returns a score');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

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
      .appendField(new Blockly.FieldImage("../media/words/sigma.png", 30, 30, "*"))
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
      .appendField(new Blockly.FieldImage("../media/words/soleil.png", 30, 30, "*"))
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
