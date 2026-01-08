function createBBAModelApplicationForm() {
    // Create the form
    var form = FormApp.create('BBA Model Application');
    
    // Set description
    form.setDescription('Join the Big Butt Association family. No pro photos required.');
    
    // Collect email
    form.setCollectEmail(true);
    
    // Set confirmation message
    form.setConfirmationMessage('✅ Application submitted successfully! We\'ll be in touch soon.');
    
    // SECTION 1: BASIC INFORMATION
    form.addPageBreakItem()
      .setTitle('Section 1: Basic Information');
    
    form.addTextItem()
      .setTitle('Legal Name')
      .setRequired(true)
      .setHelpText('legal_name');
    
    form.addTextItem()
      .setTitle('Preferred Name / Alias')
      .setHelpText('preferred_name');
    
    form.addTextItem()
      .setTitle('Pronouns')
      .setHelpText('pronouns');
    
    form.addDateItem()
      .setTitle('Date of Birth (18+)')
      .setRequired(true)
      .setHelpText('date_of_birth');
    
    form.addTextItem()
      .setTitle('City / State / Country')
      .setRequired(true)
      .setHelpText('location');
    
    form.addTextItem()
      .setTitle('Phone Number')
      .setRequired(true)
      .setHelpText('phone');
    
    form.addTextItem()
      .setTitle('Email Address')
      .setRequired(true)
      .setHelpText('email');
    
    form.addTextItem()
      .setTitle('Instagram')
      .setHelpText('instagram');
    
    form.addTextItem()
      .setTitle('TikTok')
      .setHelpText('tiktok');
    
    form.addTextItem()
      .setTitle('Twitter/X')
      .setHelpText('twitter');
    
    form.addTextItem()
      .setTitle('Other Platforms')
      .setHelpText('other_platforms');
    
    form.addMultipleChoiceItem()
      .setTitle('Total Followers (combined)')
      .setChoiceValues(['Under 1K', '1K-10K', '10K-50K', '50K-100K', '100K+'])
      .setHelpText('follower_count');
    
    // SECTION 2: INTENT, ENERGY & ALIGNMENT
    form.addPageBreakItem()
      .setTitle('Section 2: Intent, Energy & Alignment');
    
    form.addParagraphTextItem()
      .setTitle('Why do you want to represent Bekky specifically — not just BBA as a brand?')
      .setRequired(true)
      .setHelpText('why_represent_bekky');
    
    form.addParagraphTextItem()
      .setTitle('What does Big Butt Association represent to you beyond modeling?')
      .setRequired(true)
      .setHelpText('what_bba_represents');
    
    form.addParagraphTextItem()
      .setTitle('What part of yourself does BBA give you permission to fully express?')
      .setRequired(true)
      .setHelpText('self_expression');
    
    form.addTextItem()
      .setTitle('If someone asked "What is BBA?" — one sentence.')
      .setRequired(true)
      .setHelpText('bba_definition');
    
    form.addParagraphTextItem()
      .setTitle('What are you willing to contribute to BBA? How do you see yourself growing with the brand?')
      .setRequired(true)
      .setHelpText('contribution');
    
    form.addCheckboxItem()
      .setTitle('What kind of energy do you bring? (check all that apply)')
      .setChoiceValues([
        'Soft & magnetic',
        'Loud & dominant',
        'Playful & flirty',
        'Dark & edgy',
        'Boss energy',
        'Chaos goblin (respectfully)',
        'Other'
      ])
      .setHelpText('energy_types');
    
    form.addParagraphTextItem()
      .setTitle('Scenario: You\'re wearing BBA merch at a festival and someone disrespects the brand or Bekky. How do you handle it?')
      .setRequired(true)
      .setHelpText('scenario_response');
    
    // SECTION 3: CULTURE, STYLE & LIFESTYLE
    form.addPageBreakItem()
      .setTitle('Section 3: Culture, Style & Lifestyle');
    
    form.addCheckboxItem()
      .setTitle('EDM Genres (check all that apply)')
      .setChoiceValues([
        'House',
        'Tech House',
        'Bass House',
        'Dubstep',
        'Riddim',
        'Drum & Bass',
        'Hardstyle',
        'Trance',
        'Techno',
        'Experimental Bass',
        'Other'
      ])
      .setHelpText('edm_genres');
    
    form.addTextItem()
      .setTitle('Your FAVORITE EDM genre')
      .setHelpText('favorite_genre');
    
    form.addTextItem()
      .setTitle('Favorite DJs / Producers')
      .setHelpText('favorite_djs');
    
    form.addCheckboxItem()
      .setTitle('Favorite women\'s clothing (check all that apply)')
      .setChoiceValues([
        'Bikinis',
        'Lingerie',
        'Streetwear',
        'Festival Wear',
        'Activewear',
        'Casual',
        'Couture',
        'Other'
      ])
      .setHelpText('clothing_prefs');
    
    form.addCheckboxItem()
      .setTitle('Favorite fabrics (check all that apply)')
      .setChoiceValues([
        'Cotton',
        'Mesh',
        'Spandex',
        'Latex',
        'Denim',
        'Leather',
        'Silk',
        'Other'
      ])
      .setHelpText('fabric_prefs');
    
    form.addParagraphTextItem()
      .setTitle('What clothing do you want to see BBA make?')
      .setHelpText('clothing_requests');
    
    form.addMultipleChoiceItem()
      .setTitle('Relationship Status')
      .setChoiceValues(['Single', 'Taken', 'It\'s Complicated'])
      .setHelpText('relationship_status');
    
    form.addMultipleChoiceItem()
      .setTitle('Comfortable traveling for events?')
      .setChoiceValues(['Yes', 'No', 'Sometimes'])
      .setHelpText('travel_comfortable');
    
    form.addMultipleChoiceItem()
      .setTitle('Comfortable with festival / nightlife environments?')
      .setChoiceValues(['Yes', 'No'])
      .setHelpText('festival_comfortable');
    
    // SECTION 4: CONFIDENTIAL + AGREEMENTS
    form.addPageBreakItem()
      .setTitle('Section 4: Confidential + Agreements');
    
    form.addCheckboxItem()
      .setTitle('Substance Disclosure (Confidential) - Check all that apply')
      .setChoiceValues([
        'Alcohol',
        'Marijuana',
        'Cocaine',
        'MDMA',
        'Ketamine',
        'LSD / Acid',
        'Prescription (non-prescribed use)',
        'Other',
        'None'
      ])
      .setHelpText('substances');
    
    form.addTextItem()
      .setTitle('If "Other" substance, specify:')
      .setHelpText('substances_other');
    
    form.addCheckboxItem()
      .setTitle('Merch & Contract Agreement')
      .setChoiceValues(['I understand and agree'])
      .setRequired(true)
      .setHelpText('merch_agreement');
    
    form.addCheckboxItem()
      .setTitle('Code of Conduct')
      .setChoiceValues(['I agree to follow the BBA Code of Conduct'])
      .setRequired(true)
      .setHelpText('code_conduct');
    
    form.addCheckboxItem()
      .setTitle('BBA Model Statement')
      .setChoiceValues(['I agree'])
      .setRequired(true)
      .setHelpText('model_statement');
    
    form.addTextItem()
      .setTitle('Printed Name')
      .setRequired(true)
      .setHelpText('signature_name');
    
    form.addDateItem()
      .setTitle('Date')
      .setRequired(true)
      .setHelpText('signature_date');
    
    form.addTextItem()
      .setTitle('Signature (type your full name)')
      .setRequired(true)
      .setHelpText('signature');
    
    // Log the form URL
    Logger.log('Form created successfully!');
    Logger.log('Form URL: ' + form.getPublishedUrl());
    Logger.log('Edit URL: ' + form.getEditUrl());
    
    // Return URLs
    return {
      publishedUrl: form.getPublishedUrl(),
      editUrl: form.getEditUrl()
    };
  }
  
  
  function getFormFieldIds() {
    // Replace with your form ID (from the edit URL)
    var formId = '11z0RRVX9WwfUMLj4ROVmaru1PmCz3JB0_7o0ao6ik2A';
    
    var form = FormApp.openById(formId);
    var items = form.getItems();
    
    var fieldMapping = {};
    
    items.forEach(function(item) {
      var itemType = item.getType();
      var title = item.getTitle();
      var helpText = item.getHelpText();
      var itemId = item.getId();
      
      // Skip page breaks
      if (itemType === FormApp.ItemType.PAGE_BREAK) {
        return;
      }
      
      Logger.log('---');
      Logger.log('Title: ' + title);
      Logger.log('Help Text: ' + helpText);
      Logger.log('Item ID: ' + itemId);
      Logger.log('Type: ' + itemType);
      
      if (helpText) {
        fieldMapping[helpText] = itemId;
      }
    });
    
    Logger.log('\n\n=== FIELD MAPPING ===');
    Logger.log(JSON.stringify(fieldMapping, null, 2));
    
    return fieldMapping;
  }