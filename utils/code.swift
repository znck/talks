import Cocoa

let pasteboard = NSPasteboard.general

let re1 = try! NSRegularExpression(pattern: "background-color:.*?;")
let re2 = try! NSRegularExpression(pattern: "font-size:.*?;")
let re3 = try! NSRegularExpression(pattern: "font-family:.*?;")

let htmlType = NSPasteboard.PasteboardType(rawValue: "public.html")

for element in pasteboard.pasteboardItems! {
    let str  = element.string(forType: htmlType)
    let mstr = NSMutableString(string: str!)

    re1.replaceMatches(
        in:           mstr,
        range:        NSRange(location: 0,length: mstr.length),
        withTemplate: " ")

    re2.replaceMatches(
        in:           mstr,
        range:        NSRange(location: 0,length: mstr.length),
        withTemplate: "font-size: 32px; ")
    
    re3.replaceMatches(
        in:           mstr,
        range:        NSRange(location: 0,length: mstr.length),
        withTemplate: "font-family: 'Fira Code'; ")

    pasteboard.clearContents()
    pasteboard.setString(mstr as String, forType: htmlType)
}