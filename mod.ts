export default function(flag: string, args?: string[]) {
    args = args || Deno.args
    const prefix = flag.startsWith('-') ? '': (flag.length === 1? '-': '--')
    const pos = args.indexOf(prefix + flag)
    const terminatorPos = args.indexOf('--')
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos)
}