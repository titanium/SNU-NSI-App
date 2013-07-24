//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"com.apptendo.nsi2012";
NSString * const TI_APPLICATION_PUBLISHER = @"Apptendo LLC";
NSString * const TI_APPLICATION_URL = @"http://www.apptendo.com";
NSString * const TI_APPLICATION_NAME = @"NSI 2012";
NSString * const TI_APPLICATION_VERSION = @"1.12.1";
NSString * const TI_APPLICATION_DESCRIPTION = @"NSI 2012 app will guide you around campus during your first five days on campus.";
NSString * const TI_APPLICATION_COPYRIGHT = @"2012 by Apptendo";
NSString * const TI_APPLICATION_GUID = @"20a2f730-ae78-4c6c-9737-11bec376497c";
BOOL const TI_APPLICATION_ANALYTICS = true;

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
