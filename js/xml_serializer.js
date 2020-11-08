const xml_serializer = new XMLSerializer();
const xml_string = xml_serializer.serializeToString(
    document.getElementById('rankings-table')
);

console.log(xml_string);
