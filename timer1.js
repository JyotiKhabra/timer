const args = process.argv;
let commandLine = args.slice(2);
for (const nums of commandLine) { 
  setTimeout(function() {
    process.stdout.write('\x07')
  }, Number(nums)*1000);
}