const KEYWORDS = 
  ["ID:","UUID:","Status:","Mask:","iMask:","Project:","Tags:","Description:","Created:","Started:","Ended:","Scheduled:","Due:","Until:","Recur:","Wait until:","Modified:","Parent:","Annotation:","Dependencies:","UDA priority"];
const IDENTIFIER = 
  /\S+/;
const DATE_TIME =
  /\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/;
const COMMENT =
  /#+.*\n/;

module.exports = grammar({
  name: 'task',

  extras: $ => [ ' ', '\t', '\n' ], 
  rules: {
    source_file: $ => repeat($._definition),
    _definition: $ => choice(
      $.comment,
      $.keyword,
      $.datetime,
      $.identifier,
    ),
    comment: $ => COMMENT,
    keyword: $ => choice(...KEYWORDS),
    datetime: $ => DATE_TIME,
    identifier: $ => IDENTIFIER,
  }
});
