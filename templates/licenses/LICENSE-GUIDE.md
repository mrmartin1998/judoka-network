# Choose a License

Quick guide to selecting the right license for your project.

## Common Open Source Licenses

### MIT License
**Best for:** Most projects, especially libraries and frameworks

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

**Conditions:**
- Include license and copyright notice

**Limitations:**
- No liability
- No warranty

**Use when:** You want maximum freedom for users with minimal restrictions.

---

### Apache License 2.0
**Best for:** Projects that need patent protection

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Patent use
- ✅ Private use

**Conditions:**
- Include license and copyright notice
- State changes made
- Include NOTICE file if present

**Limitations:**
- Trademark use not allowed
- No liability
- No warranty

**Use when:** You want to protect against patent claims.

---

### GNU GPL v3
**Best for:** Projects requiring derivatives to be open source

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Patent use
- ✅ Private use

**Conditions:**
- Disclose source code
- License and copyright notice
- State changes
- Same license (copyleft)

**Limitations:**
- No liability
- No warranty

**Use when:** You want to ensure all derivatives remain open source.

---

### ISC License
**Best for:** Simpler alternative to MIT

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

**Conditions:**
- Include license and copyright notice

**Limitations:**
- No liability
- No warranty

**Use when:** You want MIT-like freedom with simpler wording.

---

## Quick Decision Tree

```
Do you want to allow commercial use?
├─ No → Proprietary/Custom License
└─ Yes
   └─ Do derivatives need to be open source?
      ├─ Yes → GPL-3.0
      └─ No
         └─ Do you need patent protection?
            ├─ Yes → Apache-2.0
            └─ No → MIT or ISC
```

## Popular Projects Use

- **MIT**: React, Angular, Rails, jQuery, Bootstrap
- **Apache 2.0**: Android, Swift, TensorFlow, Kubernetes
- **GPL-3.0**: Linux, Bash, GIMP
- **ISC**: Node.js core, npm

## How to Apply

1. Copy the appropriate license file to your project root as `LICENSE` or `LICENSE.txt`
2. Replace `[year]` with current year
3. Replace `[fullname]` with your name or organization
4. Add license badge to README (optional)

### License Badges

MIT:
```markdown
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
```

Apache 2.0:
```markdown
![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
```

GPL v3:
```markdown
![GPL v3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)
```

## Resources

- [Choose a License](https://choosealicense.com/)
- [TL;DR Legal](https://tldrlegal.com/)
- [GitHub License Picker](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
