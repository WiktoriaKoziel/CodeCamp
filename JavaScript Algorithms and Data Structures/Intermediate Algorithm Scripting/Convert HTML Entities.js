#task
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
#solution
function convertHTML(str) {
  // Create an object to map the characters to their HTML entities
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  // Use a regular expression to replace the characters with their entities
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

