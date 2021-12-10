declare function hello(): string | null | undefined;

const result = hello();

if (result == null) {
  result;
} else { 
  result
}

function groo(arg: string | null | undefined) {
  if (arg != null) { 
    // arg must be a string as `!=` RULES out
    // both null and undefined
  }
}