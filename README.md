# cel.js

Package **cel** provide tools for creating software that models systems based on **Commands**, **Events**, and **Logs**.

## Examples

cel provide tools for creating software that models systems based on ‘Commands’, ‘Events’, and ‘Logs’.
//
Collectively ‘Commands’, ‘Events’, and ‘Logs’ are called ‘Messages’.

USAGE FOR COMMAND

A COMMAND can be created with code similar to:

```javascript
const c = cel.command(version, name, payload)
```

For example:

```javascript
const apiVersion = "1";

const c = cel.command(apiVersion, "LOCK_DOOR", {"from":"john","doorid":"abc123"})
```

USAGE FOR EVENT

An EVENT can be created with code similar to:


```javascript
const e = cel.event(version, name, payload)
```

For example:

```javascript
const apiVersion = "1";

const e = cel.event(apiVersion, "DOOR_LOCKED", {"from":"jane","doorid":"abc123"});
```

USAGE FOR LOG

A LOG can be created with code similar to:

```javascript
const l = cel.log(version, name, payload)
```

For example:

```javascript
const apiVersion = "1";

const l = cel.command(apiVersion, "DOORS", {
	"doors": [
		{"from":"abc123", "is_locked":true},
		{"from":"def456", "is_locked":false},
		{"from":"ghi789", "is_locked":false},
	]
})
```

## JSON

The serialized JSON will look like:

An example **command**:
```json
{
	"magic"   : "CEL/1",
	"version" : "1",
	"kind"    : "EVENT",
	"name"    : "LOCK_DOOR",
	"payload" : {
		"from":"john",
		"doorid":"abc123",
	},
}
```

An example **event**:
```json
{
	"magic"   : "CEL/1",
	"version" : "1",
	"kind"    : "EVENT",
	"name"    : "DOOR_LOCKED",
	"payload" : {
		"from":"jane",
		"doorid":"abc123",
	},
}
```

An example **log**:
```json
{
	"magic"   : "CEL/1",
	"version" : "1",
	"kind"    : "LOG",
	"name"    : "DOORS",
	"payload" : {
		"doors": [
			{
				"doorid":"abc123",
				"is_locked":true,
			},
			{
				"doorid":"def456",
				"is_locked":false,
			},
			{
				"doorid":"ghi789",
				"is_locked":false,
			},
		],
	},
}
```

`"magic"` is (for now) always `"CEL/1"`.

`"version"` can be set to whatever you want it to be. It is a means for your to (future-proof yourself and) version your API. (If you aren't sure what to set for this, just use (the string value) `"1"`.)

The only valid values for `"kind"` are
`"COMMAND"`,
`"EVENT"`, and
`"LOG"`.

You will come up with the values of `"name"`.

And the value of `"payload"` is dependent on what the value for `"name"` is.

## See Also

A similar library has also been created for Golang:

* https://github.com/reiver/go-cel
